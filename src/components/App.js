import React, { useState } from 'react';

import { Notification } from './Notification/Notification';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';

import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = contact =>
    setContacts(contacts => [contact, ...contacts]);

  const handleDeleteContact = deleteId =>
    setContacts(contacts.filter(({ id }) => id !== deleteId));

  return (
    <div className="App">
      <Section title="Add Contact">
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <ContactList
            contacts={contacts}
            onDeleteContact={handleDeleteContact}
          />
        ) : (
          <Notification message="No contacts yet" />
        )}
      </Section>
    </div>
  );
}

export default App;
