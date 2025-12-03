const employees = [
  { 
    id: 1, 
    name: "John Doe",
    email: "emp1@mail.com", 
    password: "123",

    tasksCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    
    tasks: [
      {
        title: "Weekly Report",
        date: "2025-01-10",
        category: "Reporting",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskName: "Submit Report",
        taskDescription: "Complete and submit the weekly progress report.",
        color:"bg-red-400"
      },
      {
        title: "Daily Standup",
        date: "2025-01-09",
        category: "Meetings",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskName: "Attend Standup",
        taskDescription: "Daily morning standup with the team.",
        color:"bg-green-400"
      },
      {
        title: "Bug Fix",
        date: "2025-01-07",
        category: "Development",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskName: "Fix Login Issue",
        taskDescription: "Resolve authentication failure reported by QA.",
        color:"bg-blue-400"
      }
    ]
  },

  { 
    id: 2, 
    name: "Sarah Miller",
    email: "emp2@mail.com", 
    password: "123",

    tasksCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        title: "UI Issue Fix",
        date: "2025-01-05",
        category: "Development",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskName: "Fix Bug #241",
        taskDescription: "Resolve UI alignment issue on dashboard.",
        color:"bg-red-400"

      },
      {
        title: "Code Review",
        date: "2025-01-06",
        category: "Code Review",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskName: "Code Review",
        taskDescription: "Review pull request #295 from teammate.",
        color:"bg-green-400"

      },
      {
        title: "Documentation",
        date: "2025-01-08",
        category: "Documentation",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskName: "Update Documentation",
        taskDescription: "Improve API documentation for new endpoints.",
        color:"bg-blue-400"

      },
      {
        title: "Client Communication",
        date: "2025-01-04",
        category: "Communication",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskName: "Email Client",
        taskDescription: "Send update regarding project delays.",
        color:"bg-yellow-400"

      }
    ]
  },

  { 
    id: 3, 
    name: "Michael Chen",
    email: "emp3@mail.com", 
    password: "123",

    tasksCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Client Call",
        date: "2025-01-03",
        category: "Meetings",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskName: "Client Call",
        taskDescription: "Discuss project requirements with client.",
        color:"bg-red-400"

      },
      {
        title: "Sprint Summary",
        date: "2025-01-11",
        category: "Reporting",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskName: "Prepare Report",
        taskDescription: "Prepare summary document for the last sprint.",
        color:"bg-green-400"

      },
      {
        title: "Feature Testing",
        date: "2025-01-07",
        category: "Testing",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskName: "System Testing",
        taskDescription: "Perform testing for new feature rollout.",
        color:"bg-blue-400"

      },
      {
        title: "Log Analysis",
        date: "2025-01-09",
        category: "Debugging",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskName: "Analyze Logs",
        taskDescription: "Check error logs for unusual activity.",
        color:"bg-yellow-400"

      }
    ]
  },

  { 
    id: 4, 
    name: "Emily Johnson",
    email: "emp4@mail.com", 
    password: "123",

    tasksCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Database Backup",
        date: "2025-01-02",
        category: "Maintenance",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskName: "Database Backup",
        taskDescription: "Perform backup of production database.",
        color:"bg-red-400"
        
      },
      {
        title: "Query Optimization",
        date: "2025-01-12",
        category: "Performance",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskName: "Optimize Queries",
        taskDescription: "Improve performance of heavy SQL queries.",
        color:"bg-green-400"

      },
      {
        title: "Monitoring Setup",
        date: "2025-01-08",
        category: "DevOps",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskName: "Monitoring Setup",
        taskDescription: "Configure metrics and alerts system.",
        color:"bg-blue-400"

      }
    ]
  },

  { 
    id: 5, 
    name: "Olivia Brown",
    email: "emp5@mail.com", 
    password: "123",

    tasksCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        title: "Workshop Presentation",
        date: "2025-01-10",
        category: "Design",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskName: "Prepare Presentation",
        taskDescription: "Create slides for upcoming workshop.",
        color:"bg-red-400"

      },
      {
        title: "Training",
        date: "2025-01-06",
        category: "Training",
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        taskName: "Team Training",
        taskDescription: "Attend training session about new tools.",
        color:"bg-green-400"

      },
      {
        title: "Mockup Design",
        date: "2025-01-11",
        category: "Design",
        active: true,
        completed: false,
        failed: false,
        newTask: true,
        taskName: "Prototype Design",
        taskDescription: "Design initial mockup for new feature.",
        color:"bg-blue-400"

      },
      {
        title: "Bug Investigation",
        date: "2025-01-09",
        category: "Debugging",
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        taskName: "Bug Investigation",
        taskDescription: "Investigate memory leak issue in module.",
        color:"bg-yellow-400"

      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Admin One",
    email: "admin1@mail.com",
    password: "123"
  },
  {
    id: 2,
    name: "Admin Two",
    email: "admin2@mail.com",
    password: "123"
  },
  {
    id: 3,
    name: "Admin Three",
    email: "admin3@mail.com",
    password: "123"
  },
  {
    id: 4,
    name: "Admin Four",
    email: "admin4@mail.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    let newEmployees = JSON.stringify(employees);
    let newAdmin = JSON.stringify(admin)
    localStorage.setItem('employees',newEmployees);
    localStorage.setItem('admin',newAdmin);
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
   return {employees,admin}
}