const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {
    const db = mongoose.connect(config.db);
    
    // Register the user model
    require('../app/models/user.server.model');
    // Register the Article model
    require('../app/models/article.server.model');
    
    return db;
};