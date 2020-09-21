import React, { useState, useEffect } from 'react';

import { Notification } from './Notification/Notification';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

import { getVisibleContacts } from '../helpers/helpers';

import './App.css';

function App() {
  // imitation componentDidMount - condition from home task
  useEffect(() => {
    const phoneBookContacts = JSON.parse(localStorage.getItem('contacts'));
    phoneBookContacts && setContacts(phoneBookContacts);
  }, []);

  const [contacts, setContacts] = useState([]);

  const handleSubmit = contact => {
    const newContactName = contact.name;
    const sameName = contacts.find(({ name }) => name === newContactName);
    sameName
      ? alert(`${newContactName} is already in contacts`)
      : setContacts(contacts => {
          localStorage.setItem(
            'contacts',
            JSON.stringify([contact, ...contacts]),
          );
          return [contact, ...contacts];
        });
  };

  const handleDeleteContact = deleteId =>
    setContacts(contacts => {
      const filter = contacts.filter(({ id }) => id !== deleteId);
      localStorage.setItem('contacts', JSON.stringify(filter));
      return filter;
    });

  const [filter, setFilter] = useState('');

  const handleChangeFilter = value => setFilter(value);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div className="App">
      <Section title="Add Contact">
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={handleChangeFilter} />
        {contacts.length ? (
          <ContactList
            contacts={visibleContacts}
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
