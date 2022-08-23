const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
    name :{
        type: String,
        minlegnht: 3,
        maxlenght: 20,
        required: true
    },
    modulo :{
        type: String
    },
    edad :{
        type: Number,
        min: 18,
        max: 150
    },
    generacion :{
        type: String,
        required: true
    },
    sexo: {
        type: String,
        enum: ["f", "m", "o"]
    }

});

module.exports = mongoose.model("koders", koderSchema);