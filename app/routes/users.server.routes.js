// ROUTING FILE
const users = require('../../app/controllers/users.server.controller');
const passport = require('passport');

module.exports = function(app) {
    app.route('/api/auth/signup').post(users.signup);
    app.route('/api/auth/signin').post(users.signin);
    app.route('/api/auth/signout').get(users.signout);

    // WIRING PASSPOR'S FACEBOOK STRATEGY ROUTES ******************************************
    // start the user authentication process.
    app.get('/api/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));
    // finish the authentication process once the user has linked their
    // facebook profile.
    app.get('/api/oauth/facebook/callback', passport.authenticate('facebook',
    {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    // WIRING PASSPORT'S TWITTER STRATEGY ROUTES
    app.get('/api/oauth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }));

    app.get('/api/oauth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    // WIRING PASSPORT'S GOOGLE STRATEGY ROUTES
    app.get('/api/oauth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ],
    }));

    app.get('/api/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));
};