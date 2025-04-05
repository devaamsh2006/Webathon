const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    events: {
        type: [String],
        default: []
    },
    coordinator: {
        type: String, // or an object with name, email, etc. if needed
        required: true
    }
});

module.exports = mongoose.model('Club', clubSchema);
