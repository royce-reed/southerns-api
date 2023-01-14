import mongoose, { Schema, Document, ObjectId  } from 'mongoose';


export interface IEvent extends Document{
  _id?: ObjectId;
  venue: string;
  address: string;
  timeStart: string;
  timeEnd: string;
  dayOfWeek?: string;
  instagramHandle?: string;
  description?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

const EventSchema: Schema = new Schema(
  {
    venue: { type: String, required: [true, "Venue is required"] },
    address: { type: String, required: [true, "Address is required"] },
    instagramHandle: { type: String },
    description: { type: String },
    image: { type: String },
    dayOfWeek: { type: String /*required: [true, 'Day is required']*/ },
    timeStart: { type: String, required: [true, "Start time is required"] },
    timeEnd: { type: String, required: [true, "End Time is required"] },
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>("Event", EventSchema);