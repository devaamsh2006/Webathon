const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    clubs: {
        type: [String],
        default: []
    },
    requests:{
        type:[String],
        required:true,
        default:[]
    }
});

module.exports = mongoose.model('Student', studentSchema);
