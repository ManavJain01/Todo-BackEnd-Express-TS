import createHttpError from "http-errors";
import { type ITodo } from "./todo.dto";
import { type IUser } from "../user/user.dto";
import TodoSchema from "./todo.schema";

export const createTodo = async (user: IUser, data: ITodo) => {
    if(user.role === "ADMIN"){
        const result = await TodoSchema.create({ ...data });
        return result;
    } else {
        throw createHttpError(403, {
            message: "unauthorized user role",
        });
    }
};

export const updateTodo = async (user: IUser, id: string, data: ITodo) => {
    const result = await TodoSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editTodo = async (user: IUser, id: string, data: Partial<ITodo>) => {
    const result = await TodoSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteTodo = async (user: IUser, id: string) => {
    if(user.role === "ADMIN"){
        const result = await TodoSchema.deleteOne({ _id: id });
        return result;
    } else {
        throw createHttpError(403, {
            message: "unauthorized user role",
        });
    }
};

export const getTodoById = async (user: IUser, id: string) => {
    const result = await TodoSchema.findById(id).lean();
    return result;
};

export const getAllTodos = async (user: IUser) => {
    if(user.role === "ADMIN"){
        const result = await TodoSchema.find({}).lean();
        return result;
    } else {
        throw createHttpError(403, {
            message: "unauthorized user role",
        });
    }
};