import { Request, Response } from 'express';
import { MovieService } from '../services/MovieService';

export class MovieController {
    static async getMovies(req: Request, res: Response) {
        try {
            const movies = await MovieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getMovie(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const movie = await MovieService.getMovie(id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(404).json(error);
        }
    }

    static async createMovie(req: Request, res: Response) {
        try {
            const { title, overview, releaseDate, language, genres } = req.body;
            const newMovie = await MovieService.createMovie(title, overview, releaseDate, language, genres);
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
