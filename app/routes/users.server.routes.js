const users = require('../../app/controllers/users.server.controller');
const passport = require('passport');

module.exports = function(app) {
    // wiring the user's routes
    app.route('/signup')
    .get(users.renderSignup)
    .post(users.signup);
    
    app.route('/signin')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash:true
    }));

    app.get('/signout', users.signout);

    // WIRING PASSPOR'S FACEBOOK STRATEGY ROUTES ******************************************
    // start the user authentication process.
    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));
    // finish the authentication process once the user has linked their
    // facebook profile.
    app.get('/oauth/facebook/callback', passport.authenticate('facebook',
    {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    // WIRING PASSPORT'S TWITTER STRATEGY ROUTES
    app.get('/oauth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }));

    app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));
    
    app.route('/users')
    .post(users.create)
    .get(users.list);

    app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);

    app.param('userId', users.userByID);
};