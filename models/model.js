const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    countryCode: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
    gender: {
        type: String
    }
});

module.exports = mongoose.model('Schema', schema);