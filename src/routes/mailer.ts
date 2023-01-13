import express from "express";
import { sendMail, getAllMail } from "../controllers/mailController";
import { protect } from "../middleware/authMiddleware";

const mail = express();

mail.post("/send", sendMail);
mail.get("/inbox", protect, getAllMail);

export default mail;
