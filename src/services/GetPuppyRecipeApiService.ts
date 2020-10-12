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
  recipes: Array<IRecipe>;
}

class GetPuppyRecipeApiService {
  public async execute({ keywords }: IRequest): Promise<IResponse> {
    if (!keywords) {
      throw new Error('Ingredients not found');
    }

    const keywordsList = keywords
      .toString()
      .split(',')
      .sort((a, b) => (a > b ? 1 : -1));

    if (keywordsList.length > 3) {
      throw new Error('Maximum 3 ingredients');
    }

    const recipePuppyResponse = await axios.get(
      `${process.env.RECIPE_PUPPY_API_URL}?i=${keywords}`,
    );

    if (!recipePuppyResponse.data.results) {
      throw new Error('No results in Puppy Recipe api');
    }

    const recipes = recipePuppyResponse.data.results.map(
      (result: { title: string; ingredients: Array<string>; href: string }) => {
        return {
          title: result.title,
          ingredients: result.ingredients.toString().split(',').sort(),
          link: result.href,
          gif: '',
        };
      },
    );

    return {
      keywords: keywordsList,
      recipes,
    };
  }
}

export default GetPuppyRecipeApiService;
