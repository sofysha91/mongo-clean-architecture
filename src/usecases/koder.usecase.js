const Koder = require("../models/koder.model");

//Use Cases = Handlers

const create = (koderData) => {
    const koder = Koder.create(koderData);
    return koder;
}

module.exports = { create }