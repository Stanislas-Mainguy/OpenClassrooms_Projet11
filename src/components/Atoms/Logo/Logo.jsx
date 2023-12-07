import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Logo.css";
import { useDispatch, useSelector } from "react-redux";

const Logo = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return (
            <div className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={process.env.PUBLIC_URL + "/img/argentBankLogo.png"}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </div>
        );
    } else {
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
    } 
};

export default Logo;
