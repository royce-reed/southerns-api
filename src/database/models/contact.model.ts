import mongoose, { Schema, Document, ObjectId  } from 'mongoose';

export interface IContact extends Document {
  _id?: ObjectId;
  name: string;
  email: string;
  phone: string;
  message: string;
  phoneUnformatted?: number;
  createdAt?: string;
  updatedAt?: string;
}

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    phone: { type: String, required: [true, "Phone is required"] },
    phoneUnformatted: { type: Number },
    message: { type: String, required: [true, "Message is required"] },
  },
  { timestamps: true }
);

export default mongoose.model<IContact>("Contact", ContactSchema);