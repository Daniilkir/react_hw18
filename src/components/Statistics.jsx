import React from "react";
import Section from "./Section";
import Notification from "./Notification";

const Statistic = ({ good, neutral, bad, total, percentage }) => {
  if (total > 0) {
    return (
      <Section title="Statistic">
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {percentage}</p>
        </div>
      </Section>
    );
  } else {
    return <Notification message="No feedback given" />;
  }
};

export default Statistic;
