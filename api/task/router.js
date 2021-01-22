// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model');

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.find();
        tasks.forEach(task => {
            task.task_completed = !!task.task_completed;
        });
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
        if (!req.body.project_id) {
            res.status(400).json({ message: "Please include project id" });
        } else {
            const [taskId] = await Tasks.add(req.body);
            const task = await Tasks.findById(taskId);
            task.task_completed = !!task.task_completed;
            res.status(201).json(task);
        }

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

module.exports = router;