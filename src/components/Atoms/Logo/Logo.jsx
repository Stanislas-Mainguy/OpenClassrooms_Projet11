import React from "react";
import "./Logo.css";

const Logo = () => {
    return (
        <a className="main-nav-logo" href="#">
            <img
                className="main-nav-logo-image"
                src={process.env.PUBLIC_URL + "/img/argentBankLogo.png"}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
    );
};

export default Logo;
