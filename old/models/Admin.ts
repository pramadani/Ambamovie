import { Movie } from "./Movie";

export class Admin {
    constructor(
        public username: string,
        public password: string
    ) {}

    updateReview(movie: Movie, username: string, star: number, comment: string) {
        movie.reviews.updateReview(username, star, comment);
    }

    deleteReview(movie: Movie, username: string) {
        movie.reviews.deleteReview(username);
    }
}