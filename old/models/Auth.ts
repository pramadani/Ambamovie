import { User } from "./User";

export class Auth {
    private users: User[] = [];

    register(username: string, name: string, password: string): User | null {
        const existingUser = this.users.find(user => user.username === username);
        if (existingUser) {
            console.log("Username already taken.");
            return null;
        }

        const newUser = new User(username, name, password);
        this.users.push(newUser);
        console.log("Registration successful.");

        return newUser;
    }

    login(username: string, password: string): User | null {
        const user = this.users.find(user => user.username === username);
        if (!user || user.password !== password) {
            console.log("User or password invalid.");
            return null;
        }
        
        console.log("Login successful.");

        return user;
    }
}