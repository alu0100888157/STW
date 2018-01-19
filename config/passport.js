// Congigure authentication strategies
const passport = require('passport');
const mongoose = require('mongoose');

module.exports = function() {
    const User = mongoose.model('User');
    // Define how Passport will handle user serialization 
    // When a user is authenticated, Passport will save its _id
    // property to the session.
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // Define how Passport will handle user deserialization
    // Passport will use the _id property to grab the user object
    // from the database.
    passport.deserializeUser((id, done) => {
        User.findOne({
            _id: id
        }, '-password -salt', (err, user) => {
            done(err, user);
        });
    });
    // Import strategies configuration files
    require('./strategies/local.js')();
    require('./strategies/facebook.js')();
    require('./strategies/twitter.js')();
    require('./strategies/google.js')();
}