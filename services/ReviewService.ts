import { Review } from "../models/Review";

export class ReviewService {
    static async createReview(user: string, movieId: string, star: number, comment: string) {
        const review = new Review({ user, movieId, star, comment });
        await review.save();
        return review;
    }

    static async getReviews(movieId: string) {
        const reviews = await Review.find({ movieId }).populate('user', 'username name');
        return reviews.map(review => ({
            _id: review._id,
            star: review.star,
            comment: review.comment,
            username: review.user.username,
            name: review.user.name,
        }));
    }
    

    static async updateReview(user: string, movieId: string, star: number, comment: string) {
        const review = await Review.findOne({ user, movieId });
        if (!review) throw new Error("Review not found.");
        review.star = star;
        review.comment = comment;
        await review.save();
        return review;
    }

    static async deleteReview(user: string, movieId: string) {
        await Review.deleteOne({ user, movieId });
    }
}
