import express from 'express';
import mongoose from 'mongoose';
import movieRouter from './routes/MovieRoute';
import reviewRouter from './routes/ReviewRoute';
import userRouter from './routes/UserRoute';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/movies', movieRouter);
app.use('/reviews', reviewRouter);
app.use('/users', userRouter);

const connectDB = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI;
        if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined in .env file');
        await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 20000 });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

const startServer = async () => {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

startServer();