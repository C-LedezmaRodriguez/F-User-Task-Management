export const USERS = [
  { id: 1, name: 'Camila', email: 'camila@example.com', role: 'ADMIN' },
  { id: 2, name: 'Jorge', email: 'jorge@example.com', role: 'USER' },
  { id: 3, name: 'Andres', email: 'andres@example.com', role: 'USER' },
  { id: 4, name: 'Lucia', email: 'lucia@example.com', role: 'USER' },
  { id: 5, name: 'Miguel', email: 'miguel@example.com', role: 'USER' },
];

export const TASKS = [
  { 
    id: 1, 
    name: 'Review reports', 
    description: 'Analyze the financial reports', 
    status: 'PENDING', 
    assignedUser: 1, 
    completed: false, 
    inProgress: false 
  },
  { 
    id: 2, 
    name: 'Design logo', 
    description: 'Create a new logo for the company', 
    status: 'IN_PROGRESS', 
    assignedUser: 2, 
    completed: false, 
    inProgress: true 
  },
  { 
    id: 3, 
    name: 'Write report', 
    description: 'Write the sales report', 
    status: 'COMPLETED', 
    assignedUser: 1, 
    completed: true, 
    inProgress: false 
  },
  { 
    id: 4, 
    name: 'Develop API', 
    description: 'Create an authentication API', 
    status: 'PENDING', 
    assignedUser: 3, 
    completed: false, 
    inProgress: false 
  },
  { 
    id: 5, 
    name: 'Test application', 
    description: 'Run tests on the new application', 
    status: 'IN_PROGRESS', 
    assignedUser: 4, 
    completed: false, 
    inProgress: true 
  },
  { 
    id: 6, 
    name: 'Update documentation', 
    description: 'Write updated user manuals', 
    status: 'COMPLETED', 
    assignedUser: 5, 
    completed: true, 
    inProgress: false 
  }
];
