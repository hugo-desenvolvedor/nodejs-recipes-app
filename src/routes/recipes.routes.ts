import { Router } from 'express';
import RecipesController from '../controllers/RecipesController';

const recipesRouter = Router();
const recipesController = new RecipesController();

recipesRouter.get('/', recipesController.show);

export default recipesRouter;
