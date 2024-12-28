import React from 'react';
import { MessageSquare, CheckSquare, Users } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'comment',
    content: 'Commented on task "Update user interface"',
    time: '2 hours ago',
    icon: MessageSquare,
  },
  {
    id: 2,
    type: 'task',
    content: 'Completed task "Implement authentication"',
    time: '4 hours ago',
    icon: CheckSquare,
  },
  {
    id: 3,
    type: 'team',
    content: 'Joined Frontend Team',
    time: '1 day ago',
    icon: Users,
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className="flex-shrink-0">
              <activity.icon className="w-5 h-5 text-gray-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-600">{activity.content}</p>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}