
import mongoose from "mongoose";
import { type ITodo } from "./todo.dto";

const Schema = mongoose.Schema;

const TodoSchema = new Schema<ITodo>({
        task: { type: String, required: true },
        status: { type: String, required: true, enum: ["PENDING", "COMPLETED"], default: "PENDING" },
        user: { type: String, required: true },
}, { timestamps: true });

TodoSchema.pre("save", async function (next) {
    next();
});

export default mongoose.model<ITodo>("todo", TodoSchema);
