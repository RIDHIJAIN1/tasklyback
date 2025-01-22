import express from 'express';
import {
    createTask,
    viewAllTasks,
    viewTaskById,
    viewTasksByUserId,
    editTask,
    deleteTask
} from '../controller/task.js'; // Adjust the path as necessary
import { isAuthenticated } from '../middleware/auth.js'; // Adjust the path as necessary

const router = express.Router();

// Apply isAuthenticated middleware
router.post('/tasks', isAuthenticated, createTask); // Create a new task
router.get('/tasks', isAuthenticated, viewAllTasks); // View all tasks
router.get('/user/tasks', isAuthenticated, viewTasksByUserId); // View all tasks
router.get('/tasks/:id', isAuthenticated, viewTaskById); // View task by ID
router.put('/tasks/:id', isAuthenticated, editTask); // Edit task
router.delete('/tasks/:id', isAuthenticated, deleteTask); // Delete task

export default router;