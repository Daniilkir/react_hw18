import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
function ContactList({ contacts, onDeleteContact }) {
    const { filteredContacts, deleteContact, handleFilterChange } = useContext(ContactsContext);

    return (
        <>
            <input
                type="text"
                placeholder="Find contacts by name"
                onChange={handleFilterChange}
            />
            <ul >
                {filteredContacts.map(({ id, name, number }) => (
                    <li key={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <button onClick={() => deleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList;
