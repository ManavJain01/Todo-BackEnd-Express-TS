import * as todoService from "./todo.service";
import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express'
import { IUser } from "../user/user.dto";

export const createTodo = asyncHandler(async (req: Request, res: Response) => {
    const result = await todoService.createTodo(req.user as IUser, req.body);
    res.send(createResponse(result, "Todo created sucssefully"))
});

export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
    const result = await todoService.updateTodo(req.user as IUser, req.params.id, req.body);
    res.send(createResponse(result, "Todo updated sucssefully"))
});

export const editTodo = asyncHandler(async (req: Request, res: Response) => {
    const result = await todoService.editTodo(req.user as IUser, req.params.id, req.body);
    res.send(createResponse(result, "Todo updated sucssefully"))
});

export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
    const result = await todoService.deleteTodo(req.user as IUser, req.params.id);
    res.send(createResponse(result, "Todo deleted sucssefully"))
});


export const getTodoById = asyncHandler(async (req: Request, res: Response) => {
    const result = await todoService.getTodoById(req.user as IUser, req.params.id);
    res.send(createResponse(result))
});

export const getTodoByUserId = asyncHandler(async (req: Request, res: Response) => {
    const result = await todoService.getTodoByUserId(req.user as IUser);
    res.send(createResponse(result))
});


export const getAllTodos = asyncHandler(async (req: Request, res: Response) => {
    const result = await todoService.getAllTodos(req.user as IUser);
    res.send(createResponse(result))
});
