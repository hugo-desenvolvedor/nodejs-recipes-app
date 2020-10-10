import { Router } from 'express';
import transactionRouter from './recipes.routes';

const routes = Router();

routes.use('/recipes', transactionRouter);

export default routes;
