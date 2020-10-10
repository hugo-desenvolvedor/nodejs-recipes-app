import express from 'express';
import routes from './routes';
import 'dotenv/config';

const app = express();
app.use('/', routes);

routes.get('/recipes', (request, response) => {
  const { i } = request.query;

  return response.json({
    ingredients: i,
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
