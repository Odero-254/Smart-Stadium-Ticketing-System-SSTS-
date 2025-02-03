import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import './styles/App.css';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Welcome to the Landing Page</h1>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/reset-password" element={<ResetPasswordForm />} />
            </Routes>
        </Router>
    );
}

export default App;