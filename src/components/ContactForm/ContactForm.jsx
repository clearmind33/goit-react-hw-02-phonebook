import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      phone,
    };
    if (name && phone) {
      onSubmit(contact);
      setName('');
      setPhone('');
    }
  };
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Phone
        <input
          name="phone"
          type="tel"
          placeholder="Enter phone"
          value={phone}
          onChange={handleChange}
        />
      </label>

      <button className={styles.submit} type="submit">
        add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
