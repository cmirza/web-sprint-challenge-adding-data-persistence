// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model');

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Tasks.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [taskId] = await Tasks.add(req.body);
        const task = await Tasks.findById(taskId);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

module.exports = router;