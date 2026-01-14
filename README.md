# Backend Yusuf - Express + SQLite + Swagger

A simple TypeScript Express backend with SQLite database and Swagger API documentation.

## Features

- Express.js REST API
- SQLite database for persistence
- Swagger/OpenAPI documentation
- TypeScript support
- CRUD operations for users
- Dashboard statistics endpoints

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000`

## API Documentation

Once the server is running, you can access the Swagger UI at:
- **Swagger UI**: http://localhost:3000/api-docs

## API Endpoints

### Orders
- `GET /api/orders` - Get all orders

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Health Check
- `GET /health` - Server health check

## Database

The SQLite database file (`database.sqlite`) will be created automatically on first run. The database is seeded with initial data from the sample files.

## Project Structure

```
backend-yusuf/
├── src/
│   ├── db/
│   │   └── index.ts          # Database setup and seeding
│   ├── data/
│   │   └── dashboardData.ts  # Static dashboard data
│   ├── routes/
│   │   ├── orders.routes.ts  # Order routes
│   │   ├── dashboard.routes.ts # Dashboard routes
│   │   └── users.routes.ts   # User CRUD routes
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── app.ts                # Express app setup
│   ├── server.ts             # Server entry point
│   └── swagger.ts            # Swagger configuration
├── sample/                   # Sample data files
├── package.json
├── tsconfig.json
└── README.md
```

