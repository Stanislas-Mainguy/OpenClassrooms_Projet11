import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/slices/authSlice";
import "./SignInForm.css";

const SignInForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        
        if (!email && !password) {
            setErrorMessage("Please fill in both email and password to login.");
            return;
        } else if (!email) {
            setErrorMessage("Please enter your email.");
            return;
        } else if (!password) {
            setErrorMessage("Please enter your password.");
            return;
        }
    
        dispatch(loginUser({ email, password }))
            .then((response) => {
                if (response.payload && response.payload.token) {
                    navigate("/profile");
                    console.log('The connection was successful');
                } else {
                    setErrorMessage("Invalid username or password");
                }
            })
            .catch((error) => {
                console.error('Error during login:', error);
                setErrorMessage("Invalid username or password");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
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
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
    );
};

export default SignInForm;
