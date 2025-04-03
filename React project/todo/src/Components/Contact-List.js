import React from 'react';
import ContactItem from './Contact-Item';

function ContactList({ contacts, deleteContact, editContact }) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
              editContact={editContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;