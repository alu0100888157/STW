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
        trim: true // remove whitespaces
    },
    password: String,
    // default values
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('User', UserSchema);