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