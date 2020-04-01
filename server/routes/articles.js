const express = require('express');
const store = require('../mocks/articles.js');

function propertiesApi(app) {
  const router = express.Router();
  app.use('/api/articles', router);
  router.get('/', (req, res) => {
    res.json(store);
  });

}

module.exports = propertiesApi;
