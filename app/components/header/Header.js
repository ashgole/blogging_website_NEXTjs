
"use client";
// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4 sticky top-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="block text-white">
          <h1 className="text-white text-lg font-semibold">Blog Manager</h1>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/pages/blogpost/new" className="text-white hover:text-gray-300">Blog</Link>
          <Link href="/pages/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/pages/contactus" className="text-white hover:text-gray-300">Contact us</Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="mt-4 space-y-2 md:hidden">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/pages/blogpost/new" className="block text-white">Blog</Link>
          <Link href="/pages/about" className="block text-white">About</Link>
          <Link href="/pages/contactus" className="block text-white">Conatct us</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
