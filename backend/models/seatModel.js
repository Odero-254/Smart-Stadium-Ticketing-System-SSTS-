const pool = require('../config/db');

const getAvailableSeats = async (eventId) => {
    const result = await pool.query(
        'SELECT * FROM seats WHERE event_id = $1 AND status = $2',
        [eventId, 'available']
    );
    return result.rows;
};

const bookSeat = async (userId, seatId) => {
    await pool.query('UPDATE seats SET status = $1 WHERE id = $2', ['booked', seatId]);
    const qrCode = `ticket:${userId}:${seatId}`; // Generate a simple QR code (for demo purposes)
    const result = await pool.query(
        'INSERT INTO tickets (user_id, seat_id, qr_code) VALUES ($1, $2, $3) RETURNING *',
        [userId, seatId, qrCode]
    );
    return result.rows[0];
};

module.exports = { getAvailableSeats, bookSeat };