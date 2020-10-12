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

    await expect(puppyRecipesWithGif.keywords).toEqual(['onion', 'tomato']);

    await expect(puppyRecipesWithGif.recipes[0].title).toEqual(
      'Dehydrating Tomatoes',
    );

    await expect(puppyRecipesWithGif.recipes[0].ingredients).toEqual([
      'tomato',
    ]);

    await expect(puppyRecipesWithGif.recipes[0].link).toEqual(
      'http://www.recipezaar.com/Dehydrating-Tomatoes-325795',
    );

    await expect(puppyRecipesWithGif.recipes[0].gif).toEqual(
      'https://media2.giphy.com/media/xT9Igj9Vh5mjLl6ZW0/giphy.gif?cid=b46597can11gzg4vz9e8m34wxwglxntqsocdgpbfbddzvhlb&rid=giphy.gif',
    );
  });
});
