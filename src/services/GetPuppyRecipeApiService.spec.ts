import GetPuppyRecipeApiService from './GetPuppyRecipeApiService';

describe('Get Puppy RecipeApiService', () => {
  let getPuppyRecipeApiService: GetPuppyRecipeApiService;

  beforeEach(() => {
    getPuppyRecipeApiService = new GetPuppyRecipeApiService();
  });

  it('should not get the recipes without ingredients', async () => {
    await expect(
      getPuppyRecipeApiService.execute({ keywords: '' }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not get the recipes with more then 3 ingredients', async () => {
    await expect(
      getPuppyRecipeApiService.execute({
        keywords: 'onion,tomato,banana,potato',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should get the recipes from API', async () => {
    const puppyRecipes = await getPuppyRecipeApiService.execute({
      keywords: 'onion,tomato,banana',
    });

    expect(puppyRecipes.keywords).toEqual(['banana', 'onion', 'tomato']);
  });
});
