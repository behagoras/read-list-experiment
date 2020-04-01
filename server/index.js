const express = require('express');

const app = express();
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Rutas
const articlesRoutes = require('./routes/articles');

// instanciar rutas
articlesRoutes(app);

app.listen(3001, () => {
  console.log('App listening on port http://localhost:3001');
});
