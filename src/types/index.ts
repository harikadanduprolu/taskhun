export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'member';
  avatar?: string;
  teamId?: string;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  members: User[];
  createdAt: Date;
};

export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'blocked';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assigneeId?: string;
  teamId?: string;
  tags: string[];
  deadline: Date;
  createdAt: Date;
  updatedAt: Date;
  attachments: string[];
  comments: Comment[];
};

export type Comment = {
  id: string;
  content: string;
  userId: string;
  taskId: string;
  createdAt: Date;
};