import { Request, Response } from 'express';
import { ReviewService } from '../services/ReviewService';

export class ReviewController {
    static async createReview(req: Request, res: Response) {
        try {
            const { user, movie, star, comment } = req.body;
            const review = await ReviewService.createReview(user, movie, star, comment);
            res.status(201).json(review);
        } catch (error) {
            const err = error as Error;
            res.status(400).json({ message: err.message });
        }
    }

    static async getReviews(req: Request, res: Response) {
        try {
            const { movie } = req.params;
            const reviews = await ReviewService.getReviews(movie);
            res.status(200).json(reviews);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    static async updateReview(req: Request, res: Response) {
        try {
            const { user, movie, star, comment } = req.body;
            const review = await ReviewService.updateReview(user, movie, star, comment);
            res.status(200).json(review);
        } catch (error) {
            const err = error as Error;
            res.status(404).json({ message: err.message });
        }
    }

    static async deleteReview(req: Request, res: Response) {
        try {
            const { user, movie } = req.body;
            await ReviewService.deleteReview(user, movie);
            res.status(204).send();
        } catch (error) {
            const err = error as Error;
            res.status(404).json({ message: err.message });
        }
    }
}