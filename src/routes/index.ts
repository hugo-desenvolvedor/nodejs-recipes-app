// import { Router } from 'express';
// import recipesRouter from './recipes.routes';

// const routes = Router();

// routes.use('/recipes', recipesRouter);

// routes.get('/recipes', (request, response) => {
//   return response.json({
//     ingredients: 'ibagens',
//   });
// });

// export default routes;

import { Router } from 'express';
import transactionRouter from './recipes.routes';

const routes = Router();

routes.use('/recipes', transactionRouter);

export default routes;
