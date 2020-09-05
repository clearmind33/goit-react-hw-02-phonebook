import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

export const ContactList = ({ contacts = [], onDeleteContact }) => (
  <ul className={styles.statistics}>
    {contacts.map(({ id, name, phone }) => (
      <li key={id}>
        <div>
          <p>
            {name}: {phone}
          </p>
        </div>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete Contact
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
