import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
    return (
        <Link to="/" className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={process.env.PUBLIC_URL + "/img/argentBankLogo.png"}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    );
};

export default Logo;
