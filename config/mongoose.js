const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {
    const db = mongoose.connect(config.db);
    // Register the user model
    require('../app/models/user.server.model');
    return db;
};