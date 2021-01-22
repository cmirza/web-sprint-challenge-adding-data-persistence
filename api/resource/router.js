// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resources = require('./model');

router.get('/', async (req, res) => {
    try {
        const resources = await Resources.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const resource = await Resources.findById(req.params.id);
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [resourceId] = await Resources.add(req.body);
        const resource = await Resources.findById(resourceId);
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
});

module.exports = router;