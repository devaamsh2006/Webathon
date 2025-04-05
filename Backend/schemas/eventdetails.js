const mongoose = require('mongoose');

const eventdetailsSchema = new mongoose.Schema({
    event_id: {
        type: String,
        required: true
    },
    user_id: {
        type: [String], // Array of club names
        default: []
    }
});

module.exports = mongoose.model('eventdetail', eventdetailsSchema);
