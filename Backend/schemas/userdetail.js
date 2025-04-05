const mongoose = require('mongoose');

const usereventSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    event_id: {
        type: [String], // Array of club names
        default: []
    }
});

module.exports = mongoose.model('userdetail', usereventSchema);
