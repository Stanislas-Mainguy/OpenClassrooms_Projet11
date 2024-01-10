import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../../../store/slices/auth/authSlice";
import SectionSignIn from "../../Molecules/SectionSignIn/SectionSignIn";
import SectionHero from "../../Molecules/SectionHero/SectionHero";
import SectionFeatures from "../../Molecules/SectionFeatures/SectionFeatures";
import SectionAccount from "../../Molecules/SectionAccount/SectionAccount";
import "./Main.css";

const Main = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const location = useLocation();

    const onSignInPage = location.pathname === '/login';

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
