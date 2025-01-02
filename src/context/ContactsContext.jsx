import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsContext.Provider
      value={{ contacts, addContact, deleteContact, filter, handleFilterChange, filteredContacts }}
    >
      {children}
    </ContactsContext.Provider>
  );
};