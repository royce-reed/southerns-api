import express from "express";
import { registerUser, loginUser, getMe } from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";
const users = express();

users.post("/register", registerUser);
users.post("/login", loginUser);
users.get("/me", protect, getMe);

export default users;
