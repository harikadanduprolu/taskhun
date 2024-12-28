import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProfileHeader } from '../../components/Profile/ProfileHeader';
import { TaskSummary } from '../../components/Profile/TaskSummary';
import { ActivityFeed } from '../../components/Profile/ActivityFeed';
import { TeamSection } from '../../components/Profile/TeamSection';

export function FullPageProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <TaskSummary />
              <TeamSection />
            </div>
            <div>
              <ActivityFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}