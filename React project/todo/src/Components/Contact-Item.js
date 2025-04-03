import React from 'react';

function ContactItem({ contact, deleteContact, editContact }) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
      </div>
      <div className="contact-actions">
        <button onClick={() => editContact(contact)}>Edit</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ContactItem;