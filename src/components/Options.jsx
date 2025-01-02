import React from "react";
import Section from "./Section";
import { useRef } from "react";

const Options = ({ addGoodFeedback, addNeutralFeedback, addBadFeedback }) => {
    const titleRef = useRef(null)
    const handleGoodClick = () => {
        addGoodFeedback();
        titleRef.current.textContent = "You added  Good";
    };

    const handleNeutralClick = () => {
        addNeutralFeedback();
        titleRef.current.textContent = "You added  Neutral";
    };

    const handleBadClick = () => {
        addBadFeedback();
        titleRef.current.textContent = "You added  Bad";
    };

    return (
        <Section>
            <h1 ref={titleRef}>Please give your feedback</h1>
            <button onClick={handleGoodClick}>Good</button>
            <button onClick={handleNeutralClick}>Neutral</button>
            <button onClick={handleBadClick}>Bad</button>
        </Section>
    );
};

export default Options;
