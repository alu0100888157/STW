// File to configure the Express application
const path = require('path');
const config = require('./config');
const express = require('express');
const morgan = require('morgan'); // morgan: provides a simple logger middleware.
const compress = require('compression'); // compression: provides response compression.
const bodyParser = require('body-parser'); // body-parser: provides several middleware to handle the request data.
const methodOverride = require('method-override'); // methdo-override: provides DELETE and PUT HTTP verbs' legacy support.
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

module.exports = function() {
    // Create the express application
    const app = express();
    // Configure environment ********************************************************
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
    // *******************************************************************************
    // The session middleware adds a session object to all
    // request objects in the application.
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    // configure Express application view
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    // register the Connect-Flash module
    app.use(flash());
    // register the Passport middleware in the express application
    app.use(passport.initialize());
    app.use(passport.session());
    // Serving static file
    app.use(express.static('./public'));
    app.use('/lib', express.static(
        path.resolve('./node_modules')));
    // bootstrap the express application
    // It requires the routing file and calls it as a function, passing it
    // the application instance to create a new routing configuration, and then
    // it will call the controller's render() method.
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/index.server.routes.js')(app);
    // return the application instance
    return app
};