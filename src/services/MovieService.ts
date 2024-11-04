import { Movie } from "../models/MovieModel";

export class MovieService {
    static async getMovies() {
        return await Movie.find().select('title').exec();
    }

    static async getMovie(id: string) {
        const movie = await Movie.findById(id).exec();
        if (!movie) throw new Error("Movie not found.");
        return movie;
    }

    static async createMovie(title: string, overview: string, releaseDate: string, language: string, genres: string[]) {
        const movie = new Movie({ title, overview, releaseDate, language, genres });
        await movie.save();
        return movie;
    }
}
