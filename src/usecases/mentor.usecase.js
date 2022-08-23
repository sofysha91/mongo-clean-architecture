const Mentor = require("../models/mentor.model");

//Use Cases = Handlers
const get = (query) => {
    const mentor = Mentor.find(query);
    return mentor;
}

const create = (mentorData) => {
    const mentor = Mentor.create(mentorData);
    return mentor;
}

const update = (id, mentorData) => {
    const mentor = Mentor.findByIdAndUpdate(id, mentorData, { returnDocument: 'after'});
    return mentor;
}

const deleteMentor = (id) => {
    return Mentor.findByIdAndDelete(id);     
}

module.exports = { get, create, update, deleteMentor }