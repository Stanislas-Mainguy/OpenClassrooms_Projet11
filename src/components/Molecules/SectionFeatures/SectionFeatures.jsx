import React from "react";
import SectionFeaturesData from "./SectionFeaturesData.json";
import SectionFeaturesItems from "../../Atoms/SectionFeaturesItems/SectionFeaturesItems";
import "./SectionFeatures.css";

const SectionFeatures = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {SectionFeaturesData.map((feature, index) => (
                <SectionFeaturesItems
                    key={index}
                    imgSrc={feature.imgSrc}
                    altText={feature.altText}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </section>
    );
};

export default SectionFeatures;
