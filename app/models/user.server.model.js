const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;
// Define UserSchema object using the Schema constructor
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true, // secondary index
        match: /.\@.+\..+/
    },
    username: {
        type: String,
        // predifined modifiers
        trim: true, // remove whitespaces
        unique: true,
        required: true
    },
    password: { 
        type: String,
        validate: [
            function(password) {
                return password.length >= 6;
            },
            'Password should be longer' // pass the error message to the callback
        ]
    },
    // default values
    created: {
        type: Date,
        default: Date.now
    },
    // salt property, which you'll use to hash your password
    salt: {
        type: String
    },
    // provider property, which will indicate the strategy used to
    // register the user.
    provider: {
        type: String,
        required: 'Provider is required'
    },
    // providerId property, which will indicate the user identifier for the
    // the authentication strategy.
    providerId: String,
    // providerData property, which you'll later use to estore the user
    // object retrieved from OAuth providers.
    providerData: {},
});

// Virtual attributes
UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Post middlewares
UserSchema.post('save', function(next) {
    console.log('The user "' + this.username + '" details were saved.');
});

UserSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = new
        Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});
// hashPassword() instance method
/* which is used to hash a password string by utilizing Node.js, crypto module.
*/
UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};
// authenticate() instance method
/* which accepts a string argument, hashes it, and compares it to the current
user's hashed password.
*/
UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};
// findUniqueUsername() static method
/* which is used to find an available unique username for new users.
This method will be used when you deal with OAuth authentication.
*/
UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var possibleUsername = username + (suffix || '');
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) +
                1, callback);
            }
        } else {
            callback(null);
        }
    });
};

// (*1)
UserSchema.set('toJSON', { 
    setters: true, 
    virtuals: true 
});

mongoose.model('User', UserSchema);