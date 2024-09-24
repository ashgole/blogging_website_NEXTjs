// components/ContactUs.js
import React from 'react';

const ContactUs = ({ onSubmit }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     message: e.target.message.value,
  //   };
  //   onSubmit(formData);
  // };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Contact Us : This is Dummy page</h2>
      <form  >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            value={'Ash Gole'}
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            value={'ashgole@gmail.com'}
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            value={'Our project is a **blogging website** designed to provide users with a seamless experience for reading and sharing content. Built with **Next.js** and **React**, it features a responsive layout with easy navigation through various blog posts. Users can submit their own blogs via a user-friendly form, and the site includes an integrated contact form for feedback. Leveraging **Tailwind CSS**, the application ensures a modern and visually appealing interface. Key functionalities include fetching, displaying, and managing blog posts, making it an ideal platform for both writers and readers.'}
            name="message"
            id="message"
            required
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
