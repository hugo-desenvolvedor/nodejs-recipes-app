import axios from 'axios';

interface IRequest {
  keywords: string;
}

interface IRecipe {
  title: string;
  ingredients: Array<string>;
  link: string;
  gif: string;
}

interface IResponse {
  keywords: Array<string>;
  recipes: IRecipe[];
}

class GetPuppyRecipeApiService {
  public async execute({ keywords }: IRequest): Promise<IResponse> {
    const apiResponse = await axios.get(
      `${process.env.RECIPE_PUPPY_API_URL}?i=${keywords}`,
    );

    if (!apiResponse.data.results) {
      throw new Error('No results in Puppy Recipe api');
    }

    const recipes = apiResponse.data.results.map(result => {
      return {
        title: result.title,
        ingredients: result.ingredients,
        link: result.href,
        gif: '',
      };
    });

    return {
      keywords: keywords.toString().split(','),
      recipes,
    };
  }
}

export default GetPuppyRecipeApiService;
