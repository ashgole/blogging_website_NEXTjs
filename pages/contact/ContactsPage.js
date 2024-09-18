import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import axios from 'axios';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get('http://localhost:3000/api/contact/getContact');
      setContacts(response.data);
    };
    fetchContacts();
  }, []);



  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Contact List</h1>
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default ContactsPage;
