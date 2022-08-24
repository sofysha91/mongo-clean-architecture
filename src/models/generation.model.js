const mongoose = require("mongoose");

const generationSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: true
    },
    type: {
      type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    mentors : {
        type: [
            {
                name: {
                    type: String,
                    minlength: 3,
                    maxlength: 20,
                    required: true
                },
                module: {
                    type: String
                },
                edad :{
                    type: Number,
                    min: 18,
                    max: 150
                },                
                type: {
                    type: String,
                    enum: ["ProgramLead", "Mentor", "B-Mentor"],
                    required: true
                  }
            }        
        ]
    }
  });

module.exports = mongoose.model("generations", generationSchema);