import React from "react";
import Section from "./Section";

const Notification = ({ message }) => {
  return (
    <Section title="Statistic">
      <p>{message}</p>
    </Section>
  );
};

export default Notification;
