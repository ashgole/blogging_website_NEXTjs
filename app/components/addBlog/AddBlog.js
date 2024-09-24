// components/AddBlog.js
'use client'
import { addBlog } from '@/app/utils/api';
import React, { useState } from 'react';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBlog(formData);
      setResponseMsg('Blog added successfully!');
      setFormData({ title: '', description: '' }); // Reset form
    } catch (error) {
      setResponseMsg(error.message || 'Error adding blog');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
      {responseMsg && <p className="mb-4 text-green-500">{responseMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
