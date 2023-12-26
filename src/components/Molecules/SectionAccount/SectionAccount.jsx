import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    fetchUserProfile, 
    selectAccountData, 
    selectIsEditing, 
    selectToken, 
    selectUser, 
    toggleEdit } 
    from "../../../store/slices/authSlice";
import AccountItems from "../../Atoms/AccountItems/AccountItems";
import EditUserName from "../../Atoms/EditUserName/EditUserName";
import "./SectionAccount.css";

const SectionAccount = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
    const isEditing = useSelector(selectIsEditing);
    const accounts = useSelector(selectAccountData);

    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile());
        }  
    }, [dispatch, token]);

    const handleEditClick = () => {
        dispatch(toggleEdit());
    };

    const { firstName, lastName } = user || {};

    return (
        <>
            {isEditing ? (
                <EditUserName />
            ) : (
                <div className="header">
                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                </div>
            )}

            <h2 className="sr-only">Accounts</h2>
            {accounts && accounts.map(account => (
                <AccountItems 
                    key={account.id}
                    accountId={account.id}
                />
            ))}
        </>
    );
};

export default SectionAccount;
