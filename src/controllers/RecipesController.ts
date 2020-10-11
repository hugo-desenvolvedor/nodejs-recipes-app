import { Request, Response } from 'express';
import RecipesRepository from '../repositories/RecipesRepository';
import GetPuppyRecipeApiService from '../services/GetPuppyRecipeApiService';
import GetGiphyImageApiService from '../services/GetGiphyImageApiService';

const recipesRepository = new RecipesRepository();
const getPuppyRecipeApiService = new GetPuppyRecipeApiService();
const getGiphyImageApiService = new GetGiphyImageApiService();

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

      const recipesWithImages = await getGiphyImageApiService.execute(recipes);

      return response.json(recipesWithImages);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
