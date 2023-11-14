const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
        unique:true,
    },
    duration: {
        type:String,
        required:true,
        unique:true,
    },
    img: [],
    mode: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', eventSchema);