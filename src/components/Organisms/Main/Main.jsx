import React from "react";
import SectionSignIn from "../../Molecules/SectionSignIn/SectionSignIn";
import SectionHero from "../../Molecules/SectionHero/SectionHero";
import SectionFeatures from "../../Molecules/SectionFeatures/SectionFeatures";
import "./Main.css";

const Main = ({ signIn }) => {
    if (signIn) {
        return (
            <main className="main bg-dark">
                <SectionSignIn />
            </main>
        );
    };
    
    return (
        <main>
            <SectionHero />
            <SectionFeatures />
        </main>
    );
};

export default Main;
