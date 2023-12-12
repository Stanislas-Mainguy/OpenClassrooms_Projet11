import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, toggleEdit } from "../../../store/slices/authSlice";
import SectionAccountData from "./SectionAccountData.json";
import AccountItems from "../../Atoms/AccountItems/AccountItems";
import EditUserName from "../../Atoms/EditUserName/EditUserName";
import "./SectionAccount.css";

const SectionAccount = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const isEditing = useSelector((state) => state.auth.isEditing);

    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile());
        }  
    }, [dispatch, token]);

    const handleEditClick = () => {
        dispatch(toggleEdit());
    };

    console.log("User data", user);
    const { firstName, userName } = user || {};

    return (
        <>
            {isEditing ? (
                <EditUserName />
            ) : (
                <div className="header">
                    <h1>Welcome back<br />{firstName} {userName}!</h1>
                    <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                </div>
            )}

            <h2 className="sr-only">Accounts</h2>
            {SectionAccountData.map((account, index) => (
                <AccountItems 
                    key={index}
                    title={`Argent Bank ${account.accountType} (${account.id})`}
                    amount={account.balance}
                    description={account.description}
                />
            ))}
        </>
    );
};

export default SectionAccount;
