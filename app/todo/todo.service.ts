
import { type ITodo } from "./todo.dto";
import TodoSchema from "./todo.schema";

export const createTodo = async (data: ITodo) => {
    const result = await TodoSchema.create({ ...data });
    return result;
};

export const updateTodo = async (id: string, data: ITodo) => {
    const result = await TodoSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editTodo = async (id: string, data: Partial<ITodo>) => {
    const result = await TodoSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteTodo = async (id: string) => {
    const result = await TodoSchema.deleteOne({ _id: id });
    return result;
};

export const getTodoById = async (id: string) => {
    const result = await TodoSchema.findById(id).lean();
    return result;
};

export const getAllTodos = async () => {
    const result = await TodoSchema.find({}).lean();
    return result;
};