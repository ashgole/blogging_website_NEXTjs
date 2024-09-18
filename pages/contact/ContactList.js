import React from 'react';
import axios from 'axios';
import { rootPath } from '@/utils/constants';

const ContactList = ({ contacts,  setContacts }) => {

    const handleDelete = async (id) => {
        try {
            // Make API call to delete the contact from the server
            const response = await axios.delete(`${rootPath}/api/contact/deleteContact?id=${id}`);
            if (response.status === 200) {
                // If the API call is successful, remove the contact from the local state
                setContacts(contacts.filter(contact => contact.id !== id));
                console.log('Contact deleted successfully');
            } else {
                console.log('Failed to delete contact:', response.data.message);
            }
        } catch (error) {
            console.log('Error deleting contact:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {contacts.map((contact, index) => (
                <div key={index} className="relative bg-white shadow-md p-4 rounded-lg">
                    {/* Delete Button */}
                    <button
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(contact.id)}
                    >
                        &#10005;
                    </button>
                    {/* Contact Info */}
                    <h2 className="text-xl font-bold text-gray-800">{contact.name}</h2>
                    <p className="text-gray-600">{contact.email}</p>
                    <p className="text-gray-600">{contact.message}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
