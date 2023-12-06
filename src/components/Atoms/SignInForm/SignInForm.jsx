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

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({ email, password }))
            .then(() => {
                navigate("/profile");
                console.log('Login was OK')
            })
            .catch((error) => {
                alert("Invalid username or password");
                console.error('Error during login:', error);
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
        </form>
    );
};

export default SignInForm;
