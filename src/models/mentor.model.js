const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name :{
        type: String,
        minlegnht: 3,
        maxlenght: 20,
        required: true
    },
    modules :{
        type: [String]
    },
    age :{
        type: Number,
        min: 18,
        max: 150
    }   

});

module.exports = mongoose.model("mentors", mentorSchema);