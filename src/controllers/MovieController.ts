import { Request, Response } from 'express';
import { MovieService } from '../services/MovieService';

export class MovieController {
    static async getMovies(req: Request, res: Response) {
        try {
            const movies = await MovieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    static async getMovie(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const movie = await MovieService.getMovie(id);
            res.status(200).json(movie);
        } catch (error) {
            const err = error as Error;
            res.status(404).json({ message: err.message });
        }
    }
}
