const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

module.exports = function() {
    // Create the express application
    const app = express();
    // Configure environment
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    // The session middleware adds a session object to all
    // request objects in the application.
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    // configure application view
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // register the Passport middleware in the express application
    app.use(passport.initialize());
    app.use(passport.session());
    // bootstrap the express application
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    app.use(express.static('./public'));

    return app
};