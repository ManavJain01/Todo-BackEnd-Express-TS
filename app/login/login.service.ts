import { generateAccessTokenAndRefreshToken } from "../common/helper/jwt.helper";
import { type IUser } from "../user/user.dto";
import UserSchema from "../user/user.schema";
import bcrypt from 'bcrypt';

const isCorrectPassword = async (dbPassword: string, incomingPassword: string) => {
    if(await bcrypt.compare(incomingPassword, dbPassword)) return true;
    else return false;
}

export const getUserByLogin = async (data: IUser) => {
    const { email, password } = data;
    const SECRET_KEY = process.env.JWT_SECRET ?? ""; // Replace with a secure secret key
    const user = await UserSchema.findOne({ email });
    
    if (!user) {
        throw new Error("User not found");
    }
    
    
    // Checking input password is correct or not...
    if(!await isCorrectPassword(user.password, password)){
        throw new Error("Invalid credentials");
    }
    
    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user);

    return { user: user, accessToken, refreshToken };
};