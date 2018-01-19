// process.env: global varialbe that allows you to access predefined
// environment variables, as NODE_ENV environment variable.
// It is recommended that you set the NODE_ENV environment variable in your
// operating system prior to running your application:
//  * Windows: > set NODE_ENV = development
//  * Unix-Based environment: $ export NODE_ENV = development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Initialize mongoose configuration
// It's important to load the Mongoose configuration file before any other
// configuration is performed. This is important since any module that is loaded
// after this module will be able to use the User model without loading it by itself.
const configureMongoose = require('./config/mongoose');
// Requiring the Express configuration module
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport')
// connect to the MongoDB instance using the db property
const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();
app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000');