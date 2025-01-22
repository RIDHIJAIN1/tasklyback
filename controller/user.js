import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ role: 'user'});
        res.json({
            success: true,
            users
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
    const { id } = req.params; // Get user ID from request parameters
    try {
        const user = await User.findByIdAndDelete(id); // Find and delete the user

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Register a new user
export const newRegister = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            name,
            email,
            password: hashedPassword,
           
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({
            success: true,
            token,
            user,
            message: 'Registered Successfully'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await User.findById(id);
      if (!user) {
          return res.status(404).json({
              success: false,
              message: "User not found"
          });
      }
      res.status(200).json({
          success: true,
          user
      });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
};

// Edit user by ID
export const editUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Get the fields to update from the request body

  try {
      const user = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
      if (!user) {
          return res.status(404).json({
              success: false,
              message: "User not found"
          });
      }
      res.status(200).json({
          success: true,
          user
      });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
};
// Get user details
export const getUserDetails = (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
};

// User login
export const loginFunc = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select("+password");
        if (user && user.blocked) {
            return res.status(403).json({ success: false, message: 'User is blocked' });
        }
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({
            success: true,
            token,
            user,
            message: `Welcome back, ${user.name}`
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user count
export const userCount = async (req, res) => {
    try {
        const usersCount = await User.countDocuments();
        res.json({
            success: true,
            usersCount,
        });
    } catch (error) {
        console.error("Error fetching user count:", error);
        res.status(500).json({ error: "Error fetching user count" });
    }
};

// Logout
export const logOut = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Logged Out Successfully",
        user: req.user
    });
};

// Block a user
