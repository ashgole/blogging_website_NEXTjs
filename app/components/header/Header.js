"use client";
// components/Header.js
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  // Helper function to dynamically apply active class
  const linkClasses = (path) =>
    pathname === path
      ? 'text-white font-bold'
      : 'text-white hover:text-gray-300';

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
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className={linkClasses('/')}>Home</Link>
           <Link href="/pages/about" className={linkClasses('/pages/about')}>About</Link>
          <Link href="/pages/contactus" className={linkClasses('/pages/contactus')}>Contact Us</Link>
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="mt-4 space-y-2 md:hidden">
          <Link href="/" className={linkClasses('/')}>Home</Link>
          <Link href="/pages/about" className={linkClasses('/pages/about')}>About</Link>
          <Link href="/pages/contactus" className={linkClasses('/pages/contactus')}>Contact Us</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
