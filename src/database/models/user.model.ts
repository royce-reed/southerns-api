import mongoose, { Schema, Document, ObjectId  } from 'mongoose';

export interface IUser extends Document {
  _id?: ObjectId;
  name: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);