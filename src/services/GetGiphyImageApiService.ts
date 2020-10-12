import axios from 'axios';

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

interface IRequest {
  keywords: Array<string>;
  recipes: IRecipe[];
}

class GetGiphyImageApiService {
  public async execute(data: IRequest): Promise<IResponse> {
    const recipes = await Promise.all(
      data.recipes.map(recipe => {
        const ENDPOINT = `${process.env.GIPHY_API_URL}/search?api_key=${
          process.env.GIPHY_API_KEY
        }&q=${encodeURIComponent(
          recipe.title,
        )}&limit=1&offset=0&rating=g&lang=en`;

        return axios.get(ENDPOINT).then(response => {
          return {
            ...recipe,
            gif: response.data.data[0].images.original.url,
          };
        });
      }),
    );

    return {
      keywords: data.keywords,
      recipes,
    };
  }
}

export default GetGiphyImageApiService;
