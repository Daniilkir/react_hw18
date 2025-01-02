import { useState, useContext } from "react";
import { ContactsContext } from "../context/ContactsContext.jsx";

function ContactForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const { addContact } = useContext(ContactsContext);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact(name, number);
        setName("");
        setNumber("");
    };


    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">Add Contact</button>
        </form>
    );
}

export default ContactForm;
