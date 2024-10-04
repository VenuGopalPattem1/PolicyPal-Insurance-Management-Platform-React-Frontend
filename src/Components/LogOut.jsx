// src/components/Logout.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/login'); // Redirect to login after logout
    };

    return (
        <div className="container mt-5 text-center">
            <h2>You have been logged out</h2>
            <button className="btn btn-primary mt-3" onClick={handleLogout}>
                Return to Login
            </button>
        </div>
    );
};

export default Logout;
