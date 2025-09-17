'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const navItems = ['Hero', 'Skills', 'Experience', 'Projects', 'Leadership'];

  return (
    <nav className="w-full px-6 py-4 fixed top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Jay Patel</h1>
      <div className="flex gap-4 items-center">
        {navItems.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-blue-500 transition"
          >
            {item}
          </a>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          title="Toggle Theme"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
