import Database from 'better-sqlite3';
import path from 'path';
import { User, Order } from '../types';

const dbPath = path.join(__dirname, '../../database.sqlite');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create users table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL,
    status TEXT NOT NULL,
    lastActive TEXT NOT NULL,
    avatar TEXT NOT NULL
  )
`);

// Create orders table
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    user TEXT NOT NULL,
    avatar TEXT NOT NULL,
    project TEXT NOT NULL,
    address TEXT NOT NULL,
    date TEXT NOT NULL,
    status TEXT NOT NULL
  )
`);

// Seed data if tables are empty
const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
const orderCount = db.prepare('SELECT COUNT(*) as count FROM orders').get() as { count: number };

if (userCount.count === 0) {
  const insertUser = db.prepare(`
    INSERT INTO users (name, email, role, status, lastActive, avatar)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const users: Omit<User, 'id'>[] = [
    {
      name: "Jane Doe",
      email: "jane@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "Inactive",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "John Smith",
      email: "john@example.com",
      role: "Editor",
      status: "Active",
      lastActive: "Inactive",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Viewer",
      status: "Active",
      lastActive: "Active",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
  ];

  const insertManyUsers = db.transaction((users) => {
    for (const user of users) {
      insertUser.run(
        user.name,
        user.email,
        user.role,
        user.status,
        user.lastActive,
        user.avatar
      );
    }
  });

  insertManyUsers(users);
}

if (orderCount.count === 0) {
  const insertOrder = db.prepare(`
    INSERT INTO orders (id, user, avatar, project, address, date, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const orders: Order[] = [
    {
      id: "#CM9801",
      user: "Natali Craig",
      avatar: "https://i.pravatar.cc/40?img=1",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9802",
      user: "Kate Morrison",
      avatar: "https://i.pravatar.cc/40?img=2",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9803",
      user: "Drew Cano",
      avatar: "https://i.pravatar.cc/40?img=3",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9804",
      user: "Orlando Diggs",
      avatar: "https://i.pravatar.cc/40?img=4",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9805",
      user: "Andi Lane",
      avatar: "https://i.pravatar.cc/40?img=5",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2025",
      status: "Rejected",
    },
  ];

  const insertManyOrders = db.transaction((orders) => {
    for (const order of orders) {
      insertOrder.run(
        order.id,
        order.user,
        order.avatar,
        order.project,
        order.address,
        order.date,
        order.status
      );
    }
  });

  insertManyOrders(orders);
}

export default db;

