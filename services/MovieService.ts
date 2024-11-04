import { Movie } from "../models/Movie";

export class MovieService {
    static async getMovies() {
        return await Movie.find().select('title');
    }

    static async getMovie(id: string) {
        const movie = await Movie.findById(id);
        if (!movie) throw new Error("Movie not found.");
        return movie;
    }
}
