const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  picture: {
    type: String,
    default: "https://www.behance.net/gallery/96500805/PATIENCE",
  },

  title: {
    type: String,
    text: true,
    required: true, // required is optional => Adds a required validator
  },

  description: {
    type: String,
    text: true,
    required: true,
  },

  type: {
    type: String,
    text: true,
    required: true,
  },

  tool: {
    type: String,
  },

});

const ProjectsModel = mongoose.model("Projects", projectsSchema);

module.exports = ProjectsModel;
