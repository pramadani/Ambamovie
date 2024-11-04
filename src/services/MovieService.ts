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
}
