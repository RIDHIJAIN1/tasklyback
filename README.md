# Task Management System

This is a full-stack Task Management System that allows users to register, log in, and manage tasks with CRUD operations. The project uses:

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

---

## Features

- **User Authentication**: Users can register and log in with secure password hashing.
- **Task Management**: 
  - Users can create, read, update, and delete tasks.
  - Each task has a title, description, due date, and status.
- **Role-Based Access**: Admin can view and manage all tasks.
- **Responsive UI**: Built with React for a smooth user experience.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Password Hashing**: bcrypt

---

## Setup and Installation

### Backend Setup (Node.js + Express.js)

#### Prerequisites:
- Node.js (v14 or higher)
- MongoDB (locally or via MongoDB Atlas)

#### Steps:

1. Clone the repository:
   ```bash
   git clone [<repository_url>](https://github.com/RIDHIJAIN1/tasklyback)
   cd backend
Install the backend dependencies:

npm install
Create a .env file in the backend folder and add the following configuration:

PORT=4000

Run the backend:

npm start
The backend should now be running at http://localhost:4000.

## API Documentation

### Authentication Endpoints
- **Register**: `POST /api/v1/signup`
  - Request body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`
- **Login**: `POST /api/v1/login`
  - Request body: `{ "email": "john@example.com", "password": "password123" }`

### Task Endpoints
- **Get Tasks**: `GET /api/v1/tasks` (Requires authentication)
- **Create Task**: `POST /api/v1/tasks/new`
  - Request body: `{ "title": "Task 1", "description": "Task details", "dueDate": "2025-01-30", "status": "Pending" }`
- **Update Task**: `PUT /api/v1/tasks/:id`
  - Request body: `{ "title": "Updated Task", "status": "In Progress" }`
- **Delete Task**: `DELETE /api/v1/tasks/:id`

---
