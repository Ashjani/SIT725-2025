const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model('Project', ProjectSchema);

const getAllProjects = () => {
    return Project.find({});
};

mongoose.connect('mongodb://localhost:27017/myprojectDB');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

module.exports = {
    getAllProjects
};