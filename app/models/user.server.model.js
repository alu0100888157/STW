const mongoose = require('mongoose');
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
    }
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
})

mongoose.model('User', UserSchema);