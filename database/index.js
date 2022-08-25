import mongoose from "mongoose";
import dotenv from "dotenv/config";

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI);
console.log("✨ Connected to MongoDB");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  password: { type: String, required: [true, 'Password is required'] },
}, { timestamps: true });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  phoneUnformatted: Number,
  message: { type: String, maxLength: 510 },
}, { timestamps: true });

const eventSchema = new mongoose.Schema({
  venue: { type: String, required: [true, 'Venue is required'] },
  address: { type: String, required: [true, 'Address is required'] },
  instagramHandle: { type: String },
  description: { type: String },
  image: { type: String },
  dayOfWeek: { type: String, required: [true, 'Day is required'] },
  timeStart: { type: String, required: [true, 'Start time is required'] },
  timeEnd: { type: String, required: [true, 'End Time is required'] },

}, { timestamps: true });


const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('Contact', contactSchema);
const Event = mongoose.model('Event', eventSchema);


export { mongoose, User, Contact, Event };
