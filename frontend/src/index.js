const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});