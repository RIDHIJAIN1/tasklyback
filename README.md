
README.md
Task Management System
This is a full-stack Task Management System that allows users to register, log in, and manage tasks with CRUD operations. The project uses:

Backend: Node.js, Express.js
Frontend: React.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Features
User Authentication: Users can register and log in with secure password hashing.
Task Management:
Users can create, read, update, and delete tasks.
Each task has a title, description, due date, and status.
Role-Based Access: Admin can view and manage all tasks.
Responsive UI: Built with React for a smooth user experience.
Tech Stack
Backend: Node.js, Express.js
Frontend: React.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
Password Hashing: bcrypt
Setup and Installation
Backend Setup (Node.js + Express.js)
Prerequisites:
Node.js (v14 or higher)
MongoDB (locally or via MongoDB Atlas)
Steps:
Clone the repository:

bash
Copy
Edit
git clone [<repository_url>](https://github.com/RIDHIJAIN1/tasklyback)
cd backend
Install the backend dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend folder and add the following configuration:

env
Copy
Edit
PORT=4000
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret_key>
Run the backend:

bash
Copy
Edit
npm start
The backend should now be running at http://localhost:4000.

