import mongoose, { Document, Schema } from 'mongoose';

interface IMovie extends Document {
    title: string;
    overview: string;
    releaseDate: string;
    language: string;
    genres: string[];
}

const MovieSchema: Schema = new Schema({
    title: { type: String, required: true },
    overview: { type: String, required: true },
    releaseDate: { type: String, required: true },
    language: { type: String, required: true },
    genres: { type: [String], required: true }
});

export const Movie = mongoose.model<IMovie>('Movie', MovieSchema);