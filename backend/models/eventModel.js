const pool = require('../config/db');

const createEvent = async (name, date, location) => {
    const result = await pool.query(
        'INSERT INTO events (name, date, location) VALUES ($1, $2, $3) RETURNING *',
        [name, date, location]
    );
    return result.rows[0];
};

const updateEvent = async (id, name, date, location) => {
    const result = await pool.query(
        'UPDATE events SET name = $1, date = $2, location = $3 WHERE id = $4 RETURNING *',
        [name, date, location, id]
    );
    return result.rows[0];
};

const deleteEvent = async (id) => {
    const result = await pool.query(
        'DELETE FROM events WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};

module.exports = { createEvent, updateEvent, deleteEvent };