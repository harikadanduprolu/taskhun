import React from 'react';
import { UserPlus } from 'lucide-react';
import { TeamCard } from '../components/teams/TeamCard';
import { TeamStats } from '../components/teams/TeamStats';

const mockTeams = [
  {
    id: '1',
    name: 'Engineering',
    description: 'Core engineering and development team',
    members: [],
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'Design',
    description: 'UI/UX and product design team',
    members: [],
    createdAt: new Date(),
  },
];

export function Teams() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Teams</h1>
            <p className="mt-2 text-sm text-gray-700">
              Manage your teams and members
            </p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <UserPlus className="h-5 w-5 mr-2" />
            New Team
          </button>
        </div>
      </div>

      <TeamStats />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}