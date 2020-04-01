const express = require('express');
const store = require('../mocks/articles.js');

function propertiesApi(app) {
  const router = express.Router();
  app.use('/api/articles', router);
  router.get('/', (req, res) => {
    res.status(200).json({
      status: 200,
      data: store,
    });
  });

}

module.exports = propertiesApi;
