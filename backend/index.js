const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const seatRoutes = require('./routes/seatRoutes'); // Import seat routes

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(morgan('dev')); // Log HTTP requests in the console

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Stadium Ticketing System!' });
});

// Routes
app.use('/api/users', userRoutes); // Use user routes
app.use('/api/auth', authRoutes); // Use auth routes
app.use('/api/seats', seatRoutes); // Use seat routes

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});