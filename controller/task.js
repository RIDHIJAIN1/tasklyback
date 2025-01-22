import { Task } from '../models/task.js'; // Adjust the path as necessary

// Create a new task
export const createTask = async (req, res) => {
    try {
        const { title, description, date, status } = req.body;
       
        const userId = req.user._id; 
        const newTask = new Task({ userId, title, description, date, status });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(400).json({ message: 'Error creating task', error: error.message });
    }
};
export const viewTasksByUserId = async (req, res) => {
    try {
        const userId = req.user._id; // Get userId from request parameters
        const tasks = await Task.find({ userId }).populate('userId', 'name email'); // Fetch tasks for the user

        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for this user' });
        }

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
};


// View all tasks
export const viewAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('userId', 'name email'); // Populate user details if needed
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
};

// View a task by ID
export const viewTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId).populate('userId', 'name email');

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error: error.message });
    }
};

// Edit a task
export const editTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        res.status(400).json({ message: 'Error updating task', error: error.message });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
};