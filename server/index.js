const express = require('express');

const app = express();

// middlewares
app.use(express.json());

// Rutas
const articlesRoutes = require('./routes/articles');

// instanciar rutas
articlesRoutes(app);

app.listen(3001, () => {
  console.log('App listening on port http://localhost:3001');
});
