import express from "express";
import {
  createMenuItem,
  getMenuItems,
  getMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuController";

import { protect } from "../middleware/authMiddleware";
const menu = express();

menu.post("/", protect, createMenuItem);
menu.get("/", protect, getMenuItems);
menu.get("/:id", protect, getMenuItem);
menu.put("/:id", protect, updateMenuItem);
menu.delete("/:id", protect, deleteMenuItem);

export default menu;
