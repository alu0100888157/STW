const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define UserSchema object using the Schema constructor
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        // predifined modifiers
        trim: true, // remove whitespaces
        unique: true
    },
    password: String,
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

mongoose.model('User', UserSchema);