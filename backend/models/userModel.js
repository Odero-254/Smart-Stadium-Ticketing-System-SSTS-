const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, hashedPassword]
    );
    return result.rows[0];
};

const getUserByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword); // Compare passwords
};

module.exports = { createUser, getUserByEmail, verifyPassword };