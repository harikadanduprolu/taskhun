import React, { useState, useRef, useEffect } from 'react';
import { Settings, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ProfileDropdown() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setIsProfileOpen(false);
    navigate('/profile');
  };

  return (
    <div className="ml-3 relative" ref={dropdownRef}>
      <div className="flex items-center">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="focus:outline-none"
        >
          <img
            className="h-8 w-8 rounded-full ring-2 ring-white cursor-pointer transition-opacity hover:opacity-80"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
          />
        </button>
      </div>
      
      {isProfileOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
          <div className="px-4 py-3">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="text-sm font-medium text-gray-900 truncate">john.doe@example.com</p>
          </div>
          <div className="border-t border-gray-100"></div>
          <button
            className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleProfileClick}
          >
            <User className="mr-3 h-4 w-4 text-gray-400" />
            Your Profile
          </button>
          <button
            className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => navigate('/settings')}
          >
            <Settings className="mr-3 h-4 w-4 text-gray-400" />
            Settings
          </button>
          <button
            className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {/* Handle logout */}}
          >
            <LogOut className="mr-3 h-4 w-4 text-gray-400" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}