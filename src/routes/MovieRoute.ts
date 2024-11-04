import express from 'express';
import { MovieController } from '../controllers/MovieController';

const movieRouter = express.Router();

movieRouter.get('/', MovieController.getMovies);
movieRouter.get('/:id', MovieController.getMovie);

export default movieRouter;