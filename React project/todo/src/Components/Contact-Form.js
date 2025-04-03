import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, updateContact, isEditing, currentContact, cancelEdit }) {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (isEditing && currentContact) {
      setContact(currentContact);
    } else {
      setContact({
        name: '',
        phone: '',
        email: ''
      });
    }
  }, [isEditing, currentContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone || !contact.email) {
      alert('Please fill in all fields');
      return;
    }

    if (isEditing) {
      updateContact(contact);
    } else {
      addContact(contact);
      setContact({
        name: '',
        phone: '',
        email: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div className="form-actions">
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
        {isEditing && (
          <button type="button" onClick={cancelEdit}>Cancel</button>
        )}
      </div>
    </form>
  );
}

export default ContactForm;