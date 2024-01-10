import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserNameEditProfile, selectUser, toggleEdit } from "../../../store/slices/auth/authSlice";
import "./EditUserName.css";

const EditUserName = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(user?.userName || '');
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleCancelClick = () => {
        dispatch(toggleEdit());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedData = { userName: userName};
        dispatch(fetchUserNameEditProfile(updatedData));
        dispatch(toggleEdit());
    };
    
    return (
        <div className={`edit-username-block ${animate ? 'animate-edit-username-block' : ''}`}>
            <h1>Edit user info</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user-name">User name:</label>
                    <input 
                        type="text"
                        id="user-name"
                        autoComplete="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="first-name">First name:</label>
                    <input 
                        type="text"
                        id="first-name"
                        autoComplete="given-name"
                        disabled
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="last-name">Last name:</label>
                    <input 
                        type="text"
                        id="last-name"
                        autoComplete="family-name"
                        disabled
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="save-cancel-button">
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditUserName;
