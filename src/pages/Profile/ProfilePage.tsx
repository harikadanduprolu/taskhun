import React from 'react';
import { ProfileHeader } from '../../components/Profile/ProfileHeader';
import { TaskSummary } from '../../components/Profile/TaskSummary';
import { ActivityFeed } from '../../components/Profile/ActivityFeed';
import { TeamSection } from '../../components/Profile/TeamSection';

export function ProfilePage() {
  return (
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
  );
}