import React from 'react';
import { Mail, Phone, MapPin, Edit } from 'lucide-react';

export function ProfileHeader() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex items-start">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <button className="absolute bottom-2 right-2 p-1.5 bg-white rounded-full shadow-lg hover:bg-gray-50">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-sm text-gray-500">Senior Developer</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Online
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:john.doe@example.com" className="text-sm hover:text-indigo-600">
                john.doe@example.com
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}