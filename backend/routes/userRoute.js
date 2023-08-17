import express from "express";
import { addProject, addTimeline, contact,
         deleteProject,
         deleteTimeline,
         getAllUsers, 
         login, 
         logout, 
         myProfile, 
         registerUser, 
         updateUser } from "../controller/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

export const userRouter = express.Router();


userRouter.route("/register").post(registerUser);

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/admin/users").get(getAllUsers);
//userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated,myProfile);


userRouter.route("/admin/updateUser").put(isAuthenticated, updateUser);

userRouter.route("/admin/timeline/add").post(isAuthenticated,addTimeline);
userRouter.route("/admin/project/add").post(isAuthenticated,addProject);
userRouter.route("/contact").post(contact);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated,deleteTimeline);
userRouter.route("/admin/project/:id").delete(isAuthenticated,deleteProject);

