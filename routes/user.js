import express from "express";
import { User } from "../models/user.js";
import { editUser, getAllUsers,  getSingleUser,  deleteUser,getUserDetails,logOut,loginFunc,newRegister, userCount  } from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";


const router = express.Router()

router.post("/signup",newRegister)     
router.post("/login",loginFunc)
router.get('/:id', getSingleUser); // Get user by ID
router.put('/:id', editUser); // Edit user by ID
router.delete('/:id', deleteUser); // Edit user by ID
router.get("/",getAllUsers)
router.get("/logout",logOut)
router.get("/usercount",userCount)




router.get( "/me",isAuthenticated,getUserDetails)

export default router;
