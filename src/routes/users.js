import express from 'express';
import { registerUser, loginUser, getMe } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const users = express();

users.post('/register', registerUser);
users.post('/login', loginUser);
users.get('/me', protect, getMe);

export default users;
