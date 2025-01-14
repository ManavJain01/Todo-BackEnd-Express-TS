
import { ObjectId } from "mongoose";
import { type BaseSchema } from "../common/dto/base.dto";

export interface ITodo extends BaseSchema {
    task: string;
    status: "PENDING" | "COMPLETED";
    user: string
}
