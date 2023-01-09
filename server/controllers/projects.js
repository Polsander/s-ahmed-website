
const Project = require('../models/Project');

module.exports.getAll = async (req, res) => {
    const projects = await Project.find({});
    const formattedData = JSON.stringify(projects);
    res.send(formattedData);
};

module.exports.getProject = async (req, res) => {
    const project = await Project.findById(req.params.id);
    const formattedData = JSON.stringify(project);
    res.send(formattedData);
};