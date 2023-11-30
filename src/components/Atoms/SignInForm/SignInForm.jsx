import React from "react";
import "./SignInForm.css";

const SignInForm = () => {
    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" autoComplete="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" autoComplete="current-password" />
            </div>
            <div className="input-remember">
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" id="remember-me" />
            </div>
            <button className="sign-in-button">Sign In</button>
        </form>
    );
};

export default SignInForm;
