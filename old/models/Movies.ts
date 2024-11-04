import { Movie } from "./Movie";

export class Movies {
    private movies: Movie[] = [];

    createMovie(movie: Movie) {
        this.movies.push(movie);
    }

    getAllMovies() {
        return this.movies;
    }

    getMovieByTitle(title: string) {
        return this.movies.find(movie => movie.title === title);
    }
}
