import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export function TaskSummary() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Task Summary</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-sm font-medium text-green-900">Completed</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-green-900">24</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-900">In Progress</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-blue-900">12</p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-sm font-medium text-red-900">Overdue</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-red-900">3</p>
        </div>
      </div>
    </div>
  );
}