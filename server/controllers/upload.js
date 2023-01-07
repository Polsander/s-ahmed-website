
module.exports.renderUpload = (req, res) => {
    res.send('made it to the upload render');
};

module.exports.uploadImage = (req, res) => {
    const data = req.file
    const path_link = req.file.path
    
    res.send(path_link)
}