import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../store/slices/auth/authSlice";
import "./ErrorPage404.css";

const ErrorPage404 = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (isAuthenticated) {
        return (
            <div className="error-page-404 bg-dark">
            <div className="error-404-block">
                <h1>...Error 404...</h1>
                <h2>Operation Not Found</h2>
                <p>
                    We can't find the page you're looking for. It may have been moved or is no longer available.
                    Please check the URL or return to the profile to continue your financial navigation safely.
                </p>
                <img
                    className="error-bank-picture" 
                    src={process.env.PUBLIC_URL + "/img/Error-404-picture.webp"}
                    alt="Bank vault displaying 404 code symbolizing a page not found"
                />
                <p>
                    If you want to return to the homepage,
                    <br />
                    please click on our button near to sign out on the left on the top right of your screen
                    <br />
                    or on sign out if you are done with your session.
                </p>
            </div>
        </div>
        )
    } else {
        return (
            <div className="error-page-404 bg-dark">
                <div className="error-404-block">
                    <h1>...Error 404...</h1>
                    <h2>Operation Not Found</h2>
                    <p>
                        We can't find the page you're looking for. It may have been moved or is no longer available.
                        Please check the URL or return to the homepage to continue your financial navigation safely.
                    </p>
                    <img
                        className="error-bank-picture" 
                        src={process.env.PUBLIC_URL + "/img/Error-404-picture.webp"}
                        alt="Bank vault displaying 404 code symbolizing a page not found"
                    />
                    <p>
                        If you want to return to the homepage,
                        <br />
                        please click on our 'Argent Bank' logo located at the top left of your screen.
                    </p>
                </div>
            </div>
        );
    };
};

export default ErrorPage404;
