import React from "react";
import { useSelector } from "react-redux";
import SectionAccountData from "./SectionAccountData.json";
import AccountItems from "../../Atoms/AccountItems/AccountItems";
import "./SectionAccount.css";

const SectionAccount = () => {
    const { firstname, lastname } = useSelector(state.user);
    
    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{firstname} {lastname}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
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
