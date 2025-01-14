import { type IUser } from "./user.dto";
import UserSchema from "./user.schema";

// JWT
import jwt from "jsonwebtoken";

export const createUser = async (data: IUser) => {
    const SECRET_KEY = process.env.JWT_SECRET ?? "";
    const result = await UserSchema.create({ ...data });

    const token = jwt.sign(
        {
            id: result._id,
            email: result.email,
        },
        SECRET_KEY,
        {
            expiresIn: "1h", // Token expiration time
        }
    );

    return { user: result, token };
};

export const updateUser = async (id: string, data: IUser) => {
    const result = await UserSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

export const editUser = async (id: string, data: Partial<IUser>) => {
    const result = await UserSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

export const deleteUser = async (id: string) => {
    const result = await UserSchema.deleteOne({ _id: id });
    return result;
};

export const getUserById = async (id: string) => {
    const result = await UserSchema.findById(id).lean();
    return result;
};

export const getAllUser = async () => {
    const result = await UserSchema.find({}).lean();
    return result;
};
export const getUserByEmail = async (email: string) => {
    const result = await UserSchema.findOne({ email }).lean();
    return result;
}