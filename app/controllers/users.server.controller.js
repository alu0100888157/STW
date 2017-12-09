// Users controller to handle all user-ralated operations.
const User = require('mongoose').model('User');
const passport = require('passport');
// create users
exports.create = function(req, res, next) {
    const user = new User(req.body);

    user.save((err) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(user);
        }
    });
};
// find multiple user documents
exports.list = function(req, res, next) {
    User.find({}, 'username email', {
        limit: 10
    }, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(users);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.user);
};

// reading a single user document using findOne()
// userByID method. Middleware to deal with the manipulation
// of single documents when performing CRUD operations.
exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, (err, user) => {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};

// Update an existing user document
exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, {
        'new':true
    }, (err, user) => {
        if(err) {
            return next(err);
        } else {
            res.status(200).json(user);
        }
    });
};

// Delete an existing user document
exports.delete = function(req, res, next) {
    req.user.remove(err => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(req.user);
        }
    })
};

function getErrorMessage(err) {
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }
    return message;
};
// Controller method to render the sign-in page
exports.renderSignin = function(req, res, next) {
    if (!req.user) {
        res.render('signin', {
            title: 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/');
    }
};
// Controller methdo to render the signup page
exports.renderSignup = function(req, res, next) {
    if (!req.user) {
        res.render('signup', {
            title: 'Sign-up Form',
            messages: req.flash('error')
        });
    } else {
        return res.redirect('/');
    }
};

exports.signup = function(req, res, next) {
    if (!req.user) {
        const user = new User(req.body);
        user.provider = 'local';

        user.save((err) => {
            if (err) {
                const message = getErrorMessage(err);

                req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(user, (err) => {
                if (err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

// Handle OAuth user creation
exports.saveOAuthUserProfile = function(req, profile, done) {
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, (err, user) => {
        if (err) {
            return done(err);
        } else {
            if (!user) {
                const possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

                User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
                    const newUser = new User(profile);
                    newUser.username = availableUsername;

                    newUser.save((err) => {
                        return done(err, newUser);
                    });
                });
            } else {
                return done(err, user);
            }
        }
    });
};