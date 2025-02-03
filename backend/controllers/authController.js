const jwt = require('jsonwebtoken');
const { getUserByEmail, verifyPassword } = require('../models/userModel');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isPasswordValid = await verifyPassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' }); // Generate JWT
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to login' });
    }
};

module.exports = { loginUser };