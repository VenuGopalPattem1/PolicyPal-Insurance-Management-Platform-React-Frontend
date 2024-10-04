import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SIGN_IN_API } from './Helper/Constant';
// import './SignIn.css'; // Optional: Add custom CSS if needed

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const loginRequest = {
            username,
            password
        };
    
        try {
            const response = await axios.post('http://localhost:8080/signin', loginRequest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            // Destructure jwtToken, username, and roles from the response
            const { jwtToken, username, roles } = response.data;
    
            if (jwtToken) {
                // Store JWT token in localStorage
                localStorage.setItem('token', jwtToken);
                setMessage('Login successful!');
            } else {
                // Handle case where jwtToken is missing
                setMessage('Login failed. No token received.');
            }
        } catch (error) {
            // Handle error if login fails
            setMessage('Login failed. Invalid username or password.');
        }
    };
    

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign In</button>
                </form>
                {message && <div className="alert alert-danger mt-3">{message}</div>}
                <div className="text-center mt-3">
                    <a href="/register" className="text-decoration-none">Don't have an account? Register</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
