// Users controller to handle all user-ralated operations.
const User = require('mongoose').model('User');
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
    })
}