import React, { useState } from "react";
import Options from "./components/Options.jsx";
import Statistic from "./components/Statistics.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import { ContactsProvider } from "./context/ContactsContext.jsx";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood((prev) => prev + 1);
  const incrementNeutral = () => setNeutral((prev) => prev + 1);
  const incrementBad = () => setBad((prev) => prev + 1);

  const getTotalFeedback = () => good + neutral + bad;

  const getPositiveFeedback = () => {
    const total = getTotalFeedback();
    return total ? Math.round((good * 100) / total) + "%" : "0%";
  };

  return (
    <ContactsProvider>
      <div>
        <Options
          addGoodFeedback={incrementGood}
          addNeutralFeedback={incrementNeutral}
          addBadFeedback={incrementBad}
        />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={getTotalFeedback()}
          percentage={getPositiveFeedback()}
        />
      </div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </ContactsProvider>
  );
};

export default App;
