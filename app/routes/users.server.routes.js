// ROUTING FILE
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

    // WIRING PASSPORT'S GOOGLE STRATEGY ROUTES
    app.get('/oauth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ],
    }));

    app.get('/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));
    
    // app.route('/users')
    // .post(users.create)
    // .get(users.list);
    
    /*
        In Express, adding a colon before a substring in a route definition means
        that this substring will be handled as a request parameter. To handle the
        population of the req.user object, you use the app.param() method, which
        defines a middleware to be executed before any other middleware that uses
        that parameter.
    */
    // app.route('/users/:userId')
    // .get(users.read)
    // .put(users.update)
    // .delete(users.delete);

    // app.param('userId', users.userByID);
};