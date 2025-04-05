const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    noOfSeats: {
        type: Number,
        required: true
    },
    eventname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: false
    },
    club: {
        type: String,
        required: true
    },
    date_time: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    coordinator: {
        type: String,
        required: true
    },
    volunteer:{
        type:[String],
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
