import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SectionSignIn from "../../Molecules/SectionSignIn/SectionSignIn";
import SectionHero from "../../Molecules/SectionHero/SectionHero";
import SectionFeatures from "../../Molecules/SectionFeatures/SectionFeatures";
import SectionAccount from "../../Molecules/SectionAccount/SectionAccount";
import "./Main.css";

const Main = () => {
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const location = useLocation();

    const onSignInPage = location.pathname === '/signin';

    if (isAuthenticated) {
        return (
            <main className="main bg-dark">
                <SectionAccount />
            </main>
        );
    } else if (onSignInPage) {
        return (
            <main className="main bg-dark">
                <SectionSignIn />
            </main>
        );
    } else {
        return (
            <main>
                <SectionHero />
                <SectionFeatures />
            </main>
        );
    }
};

export default Main;
