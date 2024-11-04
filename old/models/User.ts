import { Movie } from "./Movie";
import { Review } from "./Review";

export class User {
    constructor(
        public username: string,
        public name: string,
        public password: string
    ) {}

    createReview(movie: Movie, star: number, comment: string) {
        const review = new Review(this.username, star, comment)
        movie.reviews.createReview(review);
    }

    updateReview(movie: Movie, star: number, comment: string) {
        movie.reviews.updateReview(this.username, star, comment);
    }

    deleteReview(movie: Movie) {
        movie.reviews.deleteReview(this.username);
    }
}