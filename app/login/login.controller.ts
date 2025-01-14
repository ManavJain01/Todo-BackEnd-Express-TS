
import * as userService from "./login.service";
import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'

export const getUserByLogin = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.getUserByLogin(req.body);
    res.send(createResponse(result, "User loign successfully"))
});