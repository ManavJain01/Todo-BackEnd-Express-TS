import jwt from "jsonwebtoken";
import { type NextFunction, type Request, type Response } from "express";
import expressAsyncHandler from "express-async-handler";
import createHttpError from "http-errors";
import process from "process";
import { type IUser } from "../../user/user.dto";
import UserSchema from "../../user/user.schema";

const fetchUser = async (id:string) => {
  return await UserSchema.findById(id).lean();
}

// Middleware for role-based authentication
export const roleAuthMiddleware = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace("bearer ", "");

    if (!token) {
      throw createHttpError(401, {
        message: "Token is required for authentication",
      });
    }

    // Verify token and attach the user information to the request object
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof decodedToken !== "object" || decodedToken === null || !("email" in decodedToken || !decodedToken.id)) {
      throw createHttpError(403, {
        message: "Invalid Token",
      });
    }

    const user = await fetchUser(decodedToken.id) as IUser;
    
    req.user = user as IUser;
    
    // Check if user has a valid role
    if (!user.role || !['ADMIN', 'USER'].includes(user.role)) {
      throw createHttpError(403, {
        message: "Invalid or unauthorized user role",
      });
    }

    next();
  }
);
