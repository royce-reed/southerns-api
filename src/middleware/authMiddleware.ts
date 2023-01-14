import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../database/models/user.model";
import { JWT_SECRET } from "../config";

const protect = asyncHandler(async (req: any, res, next) => {
  let token: string;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!req.headers.authorization.split(" ")[1]) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
