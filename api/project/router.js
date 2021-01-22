// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model');

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [projectId] = await Projects.add(req.body);
        const project = await Projects.findById(projectId);
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

module.exports = router;