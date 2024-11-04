import mongoose, { Document, ObjectId, Schema } from 'mongoose';

interface IReview extends Document {
    user: ObjectId;
    movie: ObjectId;
    star: number;
    comment: string;
}

const ReviewSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    star: { type: Number, required: true, min: 1, max: 10 },
    comment: { type: String, required: true }
});

export const Review = mongoose.model<IReview>('Review', ReviewSchema);