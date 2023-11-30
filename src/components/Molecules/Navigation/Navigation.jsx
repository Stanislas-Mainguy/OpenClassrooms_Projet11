import React from "react";
import SignIn from "../../Atoms/SignIn/SignIn";
import Logo from "../../Atoms/Logo/Logo";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <Logo />
            <SignIn />
        </nav>
    );
};

export default Navigation;
