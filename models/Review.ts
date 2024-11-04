import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

interface IReview extends Document {
    user: IUser;
    movieId: string;
    star: number;
    comment: string;
}

const ReviewSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    star: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true }
});

export const Review = mongoose.model<IReview>('Review', ReviewSchema);