import mongoose from "mongoose";
import dotenv from "dotenv/config";
dotenv;

import { MONGO_URI } from "../config";

mongoose.connect(MONGO_URI);

export default mongoose;
