const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    link: String,
    image: String,
    favorite: Boolean,
});

const Projects = mongoose.model("Projects", schema);
module.exports = Projects;
