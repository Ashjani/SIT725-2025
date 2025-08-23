const projectService = require('../services/projectService');

exports.getAllProjects = async (req, res) => {
    const items = await projectService.getAllProjects();
    res.json({ data: items });
};