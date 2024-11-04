import { Review } from "./Review";

export class Reviews {
    private reviews: Review[] = [];

    createReview(review: Review) {
        this.reviews.push(review);
    }

    getAllReviews() {
        return this.reviews;
    }

    getUserReview(userId: string) {
        return this.reviews.find(review => review.userId === userId);
    }

    updateReview(userId: string, star: number, comment: string) {
        const review = this.reviews.find(r => r.userId === userId);
        if (!review) return;
        review.updateReview(star, comment);
    }

    deleteReview(userId: string) {
        const reviewIndex = this.reviews.findIndex(r => r.userId === userId);
        if (reviewIndex === -1) return;
        this.reviews.splice(reviewIndex, 1);
    }
}