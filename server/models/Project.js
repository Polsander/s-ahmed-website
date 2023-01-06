const mongoose = require('mongoose');

// const imageSchema = new Schema({
//     url: String,
//     filename: String
// });

const projectSchema = new mongoose.Schema({
    title: String,
    body: String
});

module.exports = mongoose.model('Project', projectSchema);