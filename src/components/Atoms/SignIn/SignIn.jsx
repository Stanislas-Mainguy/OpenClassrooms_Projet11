import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../../store/slices/authSlice";
import "./SignIn.css";

const Login = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(signOut());
        navigate("/");
    };

    if (isAuthenticated) {
        return (
            <div>
                <Link to="/profile" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </Link>
                <button onClick={handleSignOut} className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        );
    }
};

export default Login;
