const mongoose = require('mongoose');
const loginSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emails: {
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('login', loginSchema);