const express = require('express');
const { addEvent, modifyEvent, removeEvent } = require('../controllers/eventController');

const router = express.Router();

router.post('/', addEvent); // POST /api/events
router.put('/:id', modifyEvent); // PUT /api/events/:id
router.delete('/:id', removeEvent); // DELETE /api/events/:id

module.exports = router;