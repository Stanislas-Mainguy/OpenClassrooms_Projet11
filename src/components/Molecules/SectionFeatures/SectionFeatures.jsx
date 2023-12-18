import React from "react";
import { useSelector } from "react-redux";
import { selectFeatures } from "../../../store/slices/authSlice";
import SectionFeaturesItems from "../../Atoms/FeaturesItems/FeaturesItems";
import "./SectionFeatures.css";

const SectionFeatures = () => {
    const features = useSelector(selectFeatures);

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((feature) => (
                <SectionFeaturesItems
                    key={feature.id}
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
