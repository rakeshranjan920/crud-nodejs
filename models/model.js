const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    emailId: {
        type: String,
        required: 'This field is required.'
    },
    testscore1: {
        type: String
    },
    testscore2: {
        type: String
    },
    testscore3: {
        type: String
    }
});

module.exports = mongoose.model('Schema', schema);