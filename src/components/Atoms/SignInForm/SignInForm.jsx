import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignInForm.css";

const SignInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'Stan' && password === 'Stanislas') {
            dispatch({ type: 'SIGN_IN'});
            navigate("/profile");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password" 
                    id="password" 
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" id="remember-me" />
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    );
};

export default SignInForm;
