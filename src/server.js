const express = require("express");

const app = express();

//Routes
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");
const routerGeneration = require("./routes/generation.route");

//JSON Middleware
app.use(express.json());
app.use("/koders", routerKoder);
app.use("/mentors", routerMentor);
app.use("/generations", routerGeneration);

//Export
module.exports = app