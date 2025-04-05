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
        type: String, // URL or file path to image
        required: false
    },
    club: {
        type: String, // or use ObjectId if referencing a Club model
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
        enum: ['online', 'offline'],
        required: true
    },
    payment: {
        type: String,
        enum: ['free', 'paid'],
        required: true
    },
    eventType: {
        type: String, // e.g., 'workshop', 'seminar', 'hackathon'
        required: true
    },
    coordinator: {
        type: String, // or an object if you want more detail (name, email, etc.)
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
