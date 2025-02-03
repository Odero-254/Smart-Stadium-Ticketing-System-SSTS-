const { createEvent, updateEvent, deleteEvent } = require('../models/eventModel');

const addEvent = async (req, res) => {
    const { name, date, location } = req.body;
    try {
        const event = await createEvent(name, date, location);
        res.status(201).json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create event' });
    }
};

const modifyEvent = async (req, res) => {
    const { id } = req.params;
    const { name, date, location } = req.body;
    try {
        const event = await updateEvent(id, name, date, location);
        res.json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update event' });
    }
};

const removeEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await deleteEvent(id);
        res.json(event);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete event' });
    }
};

module.exports = { addEvent, modifyEvent, removeEvent };