import express from 'express';
import mongoose from 'mongoose';
import movieRouter from './routes/MovieRoute';
import reviewRouter from './routes/ReviewRoute';
import userRouter from './routes/UserRoute';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/movies', movieRouter);
app.use('/reviews', reviewRouter);
app.use('/users', userRouter);

const startServer = async () => {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

startServer();