import { Request, Response } from 'express';
import GetPuppyRecipeApiService from '../services/GetPuppyRecipeApiService';
import GetGiphyImageApiService from '../services/GetGiphyImageApiService';

const getPuppyRecipeApiService = new GetPuppyRecipeApiService();
const getGiphyImageApiService = new GetGiphyImageApiService();

export default class RecipesController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { i } = request.query;

      const recipes = await getPuppyRecipeApiService.execute({
        keywords: i?.toString() || '',
      });

      const recipesWithImages = await getGiphyImageApiService.execute(recipes);

      return response.json(recipesWithImages);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
