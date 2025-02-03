// routes/userRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/userController'); // Import the controller

const router = express.Router();

// Define the POST /register route
router.post('/register', registerUser);

module.exports = router;


const { body, validationResult } = require('express-validator');

router.post(
    '/register',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        registerUser(req, res);
    }
);