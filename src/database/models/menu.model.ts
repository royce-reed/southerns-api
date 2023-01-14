import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IMenu extends Document {
  _id?: ObjectId;
  name: string;
  price: number;
  description?: string;
  image?: string;
  featured?: boolean;
  allergens?: string;
  createdAt?: string;
  updatedAt?: string;
}

const MenuSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String },
    price: { type: Number, required: [true, "Price is required"] },
    image: { type: String },
    allergens: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IMenu>("Menu", MenuSchema);
