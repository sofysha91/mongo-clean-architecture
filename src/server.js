const express = require("express");

const app = express();

//Routes
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");

//JSON Middleware
app.use(express.json());
app.use("/koders", routerKoder);
app.use("/mentors", routerMentor);

//Export
module.exports = app