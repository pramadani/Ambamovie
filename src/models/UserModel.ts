import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    username: string;
    name: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
});

export const User = mongoose.model<IUser>('User', UserSchema);