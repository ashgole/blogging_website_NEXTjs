import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { rootPath } from '@/utils/constants';
import ContactList from './ContactList';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get(`${rootPath}/api/contact/getContact`);
      setContacts(response.data);
    };
    fetchContacts();
  }, []);



  return (
    <div className="container mx-auto">
      ash
      <h1 className="text-3xl font-bold text-center my-8">Contact List</h1>
      {contacts ?
        <ContactList contacts={contacts} setContacts={setContacts} /> :
        <div>Data npt found...</div>}
    </div>
  );
};

export default ContactsPage;
