import { Request, Response } from 'express';
import RecipesRepository from '../repositories/RecipesRepository';
import GetPuppyRecipeApiService from '../services/GetPuppyRecipeApiService';

const recipesRepository = new RecipesRepository();
const getPuppyRecipeApiService = new GetPuppyRecipeApiService();

export default class RecipesController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { i } = request.query;
      if (!i) {
        throw new Error('Ingredients not found');
      }
      const keywords = i?.toString().split(',');
      if (keywords.length > 3) {
        throw new Error('Maximum 3 ingredients');
      }

      const recipes = await getPuppyRecipeApiService.execute({
        keywords: i.toString(),
      });

      return response.json(recipes);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
