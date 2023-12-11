import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleEdit } from "../../../store/slices/authSlice";
import "./EditUserName.css";

const EditUserName = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(user?.userName || '');
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Il faudra mettre la logique de mise à jour d'information plus tard ici //
    };
    
    const handleCancelClick = () => {
        dispatch(toggleEdit());
    };

    return (
        <div className="edit-username-block">
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
                        readOnly
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="last-name">Last name:</label>
                    <input 
                        type="text"
                        id="last-name"
                        readOnly
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
