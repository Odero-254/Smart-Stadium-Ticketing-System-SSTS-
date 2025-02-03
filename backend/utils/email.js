const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendResetEmail = async (email, token) => {
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        text: `Click the link to reset your password: ${resetLink}`,
    };
    await transporter.sendMail(mailOptions);
};

module.exports = { sendResetEmail };