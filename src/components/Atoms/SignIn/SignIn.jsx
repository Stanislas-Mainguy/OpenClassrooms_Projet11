import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../../store/slices/auth/authSlice";
import "./SignIn.css";

const Login = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        dispatch(signOut());
        navigate("/");
    };

    const userName = user?.userName;

    if (isAuthenticated) {
        return (
            <div className="block-logout">
                <Link to="/profile" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <span>{userName}</span>
                </Link>
                <button onClick={handleSignOut} className="sign-out">
                    <i className="fa fa-sign-out"></i>
                    <span>Sign Out</span>
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <span>Sign In</span>
                </Link>
            </div>
        );
    }
};

export default Login;
