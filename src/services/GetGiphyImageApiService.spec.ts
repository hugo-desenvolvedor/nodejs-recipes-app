import GetGiphyImageApiService from './GetGiphyImageApiService';

describe('Get Puppy RecipeApiService', () => {
  let getGiphyImageApiService: GetGiphyImageApiService;
  const puppyRecipes = {
    keywords: ['onion', 'tomato'],
    recipes: [
      {
        title: 'Dehydrating Tomatoes',
        ingredients: ['tomato'],
        link: 'http://www.recipezaar.com/Dehydrating-Tomatoes-325795',
        gif: '',
      },
    ],
  };

  beforeEach(() => {
    getGiphyImageApiService = new GetGiphyImageApiService();
  });

  it('should get the recipes with gif from API', async () => {
    const puppyRecipesWithGif = await getGiphyImageApiService.execute(
      puppyRecipes,
    );

    expect(puppyRecipesWithGif.keywords).toEqual(['onion', 'tomato']);

    expect(puppyRecipesWithGif.recipes[0].title).toEqual(
      'Dehydrating Tomatoes',
    );

    expect(puppyRecipesWithGif.recipes[0].ingredients).toEqual(['tomato']);

    expect(puppyRecipesWithGif.recipes[0].link).toEqual(
      'http://www.recipezaar.com/Dehydrating-Tomatoes-325795',
    );

    expect(puppyRecipesWithGif.recipes[0].gif).not.toBe('');
  });
});
