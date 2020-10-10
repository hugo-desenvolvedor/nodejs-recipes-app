import { Router } from 'express';
import RecipesRepository from '../repositories/RecipesRepository';

const recipesRouter = Router();
const recipesRepository = new RecipesRepository();

recipesRouter.get('/', (request, response) => {
  try {
    const { i } = request.query;

    if (!i) {
      throw new Error('Ingredients not found');
    }

    const keywords = i?.toString().split(',');
    if (keywords.length > 3) {
      throw new Error('Maximum 3 ingredients');
    }

    const recipes = recipesRepository.find(keywords);

    return response.json(recipes);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default recipesRouter;
