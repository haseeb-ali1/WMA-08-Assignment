import React, { useState } from 'react';
import ContactForm from './Components/Contact-Form';
import ContactList from './Components/Contact-List';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
    setIsEditing(false);
    setCurrentContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const editContact = (contact) => {
    setCurrentContact(contact);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentContact(null);
  };

  return (
    <div className="app">
      <h1>Todo List App</h1>
      <div className="container">
        <div className="form-container">
          <h2>{isEditing ? 'Edit Contact' : 'Add Contact'}</h2>
          <ContactForm 
            addContact={addContact}
            updateContact={updateContact}
            isEditing={isEditing}
            currentContact={currentContact}
            cancelEdit={cancelEdit}
          />
        </div>
        <div className="list-container">
          <h2>Contacts</h2>
          <ContactList 
            contacts={contacts} 
            deleteContact={deleteContact} 
            editContact={editContact}
          />
        </div>
      </div>
    </div>
  );
}

export default App;