const express = require('express');
const { getSeats, createBooking } = require('../controllers/seatController');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import middleware

const router = express.Router();

// GET /api/seats/:eventId - Get available seats for an event
router.get('/:eventId', getSeats);

// POST /api/seats/book - Book a seat (protected route)
router.post('/book', authenticateUser, createBooking);

module.exports = router;