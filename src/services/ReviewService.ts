import { Review } from "../models/ReviewModel";

export class ReviewService {
    static async createReview(user: string, movie: string, star: number, comment: string) {
        const review = new Review({ user, movie, star, comment });
        await review.save();
        return review;
    }

    static async getReviews(movie: string) {
        const reviews = await Review.find({ movie }).populate('user', 'username name');
        return reviews;
    }
    

    static async updateReview(user: string, movie: string, star: number, comment: string) {
        const review = await Review.findOne({ user, movie });
        if (!review) throw new Error("Review not found.");
        review.star = star;
        review.comment = comment;
        await review.save();
        return review;
    }

    static async deleteReview(user: string, movie: string) {
        const result = await Review.deleteOne({ user, movie });
        if (result.deletedCount === 0) throw new Error("Review not found.");
    }
}
