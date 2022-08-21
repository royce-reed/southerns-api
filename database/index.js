import mongoose from "mongoose";
import dotenv from "dotenv/config";

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI);
console.log("✨ Connected to MongoDB");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], unique: true },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  password: { type: String, required: [true, 'Password is required'] },
}, { timestamps: true });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: { type: String, maxLength: 510 },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('Contact', contactSchema);


export { mongoose, User, Contact };
