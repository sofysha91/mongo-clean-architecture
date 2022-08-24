const Generation = require("../models/generation.model");
const Mentor = require("../usecases/mentor.usecase");

const createGeneration = async (generationData) => {

    let mentors = await Mentor.addMentors(generationData);
    
    mentors = mentors.map(mentor => {
       delete mentor.generation;
       return mentor;
    });    
    
    const generation = Generation.create({...generationData, mentors});
    return generation;
}

module.exports = { createGeneration };