// src/components/Navigation.jsx
import React from 'react';
import { Home, LogIn, UserPlus, Menu } from 'lucide-react';

export const Navigation = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Home className="h-6 w-6 text-indigo-600" />
          <span className="ml-2 text-xl font-semibold text-gray-900">MyApp</span>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 rounded-md">
            <LogIn className="h-5 w-5 mr-1" />
            Login
          </a>
          <a href="/signup" className="flex items-center px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
            <UserPlus className="h-5 w-5 mr-1" />
            Sign Up
          </a>
        </div>
      </div>
    </div>
    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/login" className="flex items-center px-3 py-2 text-gray-600 hover:text-indigo-600 rounded-md">
            <LogIn className="h-5 w-5 mr-1" />
            Login
          </a>
          <a href="/signup" className="flex items-center px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
            <UserPlus className="h-5 w-5 mr-1" />
            Sign Up
          </a>
        </div>
      </div>
    )}
  </nav>
);
