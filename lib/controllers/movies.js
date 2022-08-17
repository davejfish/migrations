const { Router } = require('express');
const router = Router();
const db = require('../models');

module.exports = router
  .get('/', async (req, res, next) => {
    try {
      const response = db.movies.findAll({
        include: db.genre
      });
      res.json(response);
    } catch (e) {
      next(e);
    }
  });
