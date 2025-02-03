const { getAvailableSeats, bookSeat } = require('../models/seatModel');

const getSeats = async (req, res) => {
    const { eventId } = req.params;
    try {
        const seats = await getAvailableSeats(eventId);
        res.json(seats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch seats' });
    }
};

const createBooking = async (req, res) => {
    const { userId, seatId } = req.body;
    try {
        const ticket = await bookSeat(userId, seatId);
        res.status(201).json(ticket);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to book seat' });
    }
};

module.exports = { getSeats, createBooking };