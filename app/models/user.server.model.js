const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define UserSchema object using the Schema constructor
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});
mongoose.model('User', UserSchema);