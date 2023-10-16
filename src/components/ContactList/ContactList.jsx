import React from 'react';
import { nanoid } from 'nanoid';
import './ContactList.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, phone }) => (
          <li key={nanoid()}>
            {name} : {phone}
            <button
              id={nanoid(id)}
              className="contactListBtn"
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
