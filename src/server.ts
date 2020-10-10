import express from 'express';

const app = express();

app.get('/recipes', (request, response) => {
  const { i } = request.query;
  return response.json({ ingredients: i });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
