import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/reset-password', { email });
            alert('Reset email sent!');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPasswordForm;