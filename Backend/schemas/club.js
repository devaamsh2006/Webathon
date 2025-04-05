const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    events: {
        type: [String],
        default: []
    },
    coordinator: {
        type: String, // or an object with name, email, etc. if needed
        required: true
    },
    volunteers:{
        type:[String],
        default:[]
    }
});

module.exports = mongoose.model('Club', clubSchema);
