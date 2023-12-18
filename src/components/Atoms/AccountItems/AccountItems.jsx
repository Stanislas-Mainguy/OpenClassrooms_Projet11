import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccountData } from '../../../store/slices/authSlice';
import './AccountItems.css';

const AccountItems = ({ accountId }) => {
    const accounts = useSelector(selectAccountData);
    const account = accounts.find(acc => acc.id === accountId);

    if(!account) return null;
    
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{`Argent Bank ${account.accountType}`}</h3>
                <p className="account-amount">{account.balance}</p>
                <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};

export default AccountItems;
