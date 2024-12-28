import React from 'react';

const teams = [
  {
    id: 1,
    name: 'Frontend Team',
    role: 'Team Lead',
    members: 8,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 2,
    name: 'Backend Team',
    role: 'Member',
    members: 12,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
];

export function TeamSection() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Teams</h2>
      <div className="space-y-4">
        {teams.map((team) => (
          <div key={team.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <img
                src={team.image}
                alt={team.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">{team.name}</h3>
                <p className="text-sm text-gray-500">{team.role}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{team.members} members</span>
          </div>
        ))}
      </div>
    </div>
  );
}