
const Project = require('../models/Project');

module.exports.getAll = async (req, res) => {
    const projects = await Project.find({});
    const formattedData = JSON.stringify(projects);
    res.send(formattedData);
};

module.exports.getProject = (req, res) => {
    res.send('Got your project!');
};