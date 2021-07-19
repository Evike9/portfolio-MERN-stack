const express = require("express");
const router = express.Router();
const ProjectsModel = require("../Models/projectsModel");
const fileUploader = require("../config/cloudinary.config");

// DASHBOARD DISPLAYING PROJECTS

router.get("/", (req, res, next) => {
  ProjectsModel.find()
    .then((projectsDB) => {
      res.status(200).json(projectsDB);
    })
    .catch(next);
});

// DISPLAY A PROJECT SELECTED BY HIS ID

router.get("/:id", (req, res, next) => {
  ProjectsModel.findById(req.params.id)
    .then((projectsDB) => {
      res.status(200).json(projectsDB);
    })
    .catch(next);
});

// CREATE A NEW PROJECT

router.post("/", fileUploader.single("picture"), (req, res, next) => {
  console.log(req.body);
  const newProject = { ...req.body };

  if (req.file) {
    newProject.picture = req.file.path;
  }

  ProjectsModel.create(newProject)
    .then((newProjectInDB) => {
      res.status(201).json(newProjectInDB);
    })
    .catch(next);
});

// UPDATE A PROJECT

router.patch("/:id", (req, res, next) => {
  console.log("je suis le req.body", req.body);
  const project = { ...req.body };

  ProjectsModel.findByIdAndUpdate(req.params.id, project, { new: true })
    .then((updatedProject) => {
      // console.log(updatedProject)
      return res.status(200).json(updatedProject);
    })
    .catch(next);
});

// DELETE A PROJECT

router.delete("/:id", (req, res, next) => {
  ProjectsModel.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(204).json({ message: "not found" });
    })
    .catch(next);
});

module.exports = router;
