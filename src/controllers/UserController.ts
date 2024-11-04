import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    static async register(req: Request, res: Response) {
        try {
            const { username, name, password } = req.body;
            const user = await UserService.register(username, name, password);
            res.status(201).json(user);
        } catch (error) {
            const err = error as Error;
            res.status(400).json({ message: err.message });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const user = await UserService.login(username, password);
            res.status(200).json(user);
        } catch (error) {
            const err = error as Error;
            res.status(401).json({ message: err.message });
        }
    }
}
