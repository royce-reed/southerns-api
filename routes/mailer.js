import express from 'express';
import { sendMail, getAllMail } from '../controllers/mailController.js';
import { protect } from '../middleware/authMiddleware.js';

const mail = express();

mail.post('/send', sendMail);
mail.get('/inbox', protect, getAllMail);

export default mail;
