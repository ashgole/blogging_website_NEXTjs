import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">
        A Full Stack Developer with a skill set in MERN, Next.js, and Three.js.
      </h3>
      <p className="mb-4">
        <a
        target="_blank"
          href="https://ashabb.netlify.app/"
          className="text-blue-500 hover:underline"
        >
          We offer freelance web development using MERN, Next.js, and Three.js.
        </a>
      </p>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">About This Project</h1>
        <p className="text-gray-700 mb-6">
          This is a blogging website built to provide a seamless experience for reading and managing blog posts.
          It features a clean and modern interface for users to browse, read, and interact with blog content.
          The platform supports creating, updating, and deleting blog posts, ensuring a dynamic and engaging user experience.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>React.js</li>
          <li>Next.js</li>
          <li>TailwindCSS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Axios</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Dynamic Blog Post Management</li>
          <li>Server-Side Rendering with Next.js</li>
          <li>RESTful API Integration</li>
          <li>Responsive Design with TailwindCSS</li>
          <li>Form Handling and Validation</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Features:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>we are going to add form page with CRUD operation</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
