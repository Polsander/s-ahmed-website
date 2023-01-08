
const Project = require('../models/Project'); 

module.exports.renderUpload = (req, res) => {
    res.send('made it to the upload render');
};

module.exports.uploadImage = (req, res) => {
    const data = req.file
    const path_link = req.file.path
    
    res.send(path_link)
}

module.exports.uploadImageHeader = (req,res) => {
    const path_link = req.file.path;
    res.send(path_link);
}

module.exports.uploadProject = async (req,res) => {
    const data = req.body
    const postBody = []

    const title = data[0].content
    const thumbnail = data[1].src_url

    for (let i=2; i<data.length; i++) {
        postBody.push(data[i])
    };

    const project = new Project();
    project.title = title;
    project.thumbnail = thumbnail;
    project.body = postBody;
    await project.save();
    console.log(project);

    res.status(200).send('success');
}