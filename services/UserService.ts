import { User } from "../models/User";

export class UserService {
    static async register(username: string, name: string, password: string) {
        const existingUser = await User.findOne({ username });
        if (existingUser) throw new Error("Username already taken.");

        const user = new User({ username, name, password });
        await user.save();
        return user;
    }

    static async login(username: string, password: string) {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) throw new Error("Invalid username or password.");
        
        return user;
    }
}
