const mongoose = require('mongoose');

// const imageSchema = new Schema({
//     url: String,
//     filename: String
// });

const projectSchema = new mongoose.Schema({
    title: String,
    thumbnail: String,
    body: [{ element: String, content: String }]
});

module.exports = mongoose.model('Project', projectSchema);