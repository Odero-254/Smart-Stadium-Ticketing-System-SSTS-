// controllers/userController.js
const { createUser } = require('../models/userModel'); // Import the model

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await createUser(name, email, password);
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

module.exports = { registerUser };