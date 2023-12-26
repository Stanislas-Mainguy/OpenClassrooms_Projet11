import React from "react";
import SectionHeroContent from "../../Atoms/HeroContent/HeroContent";
import "./SectionHero.css";

const SectionHero = () => {
    return (
        <section className="hero">
            <picture>
                <source media="(min-width: 1200px)" srcSet={process.env.PUBLIC_URL + "/img/bank-tree-desktop.jpg"}/>
                <source media="(min-width: 992px)" srcSet={process.env.PUBLIC_URL + "/img/bank-tree-laptop.jpg"}/>
                <source media="(min-width: 768px)" srcSet={process.env.PUBLIC_URL + "/img/bank-tree-tablet.jpg"}/>
                <img src={process.env.PUBLIC_URL + "/img/bank-tree-mobile.jpg"} alt="picture of plante in a pot"/>
            </picture>
            <SectionHeroContent />
        </section>
    );
};

export default SectionHero;
