const router = require('express').Router();
const { Product } = require('../../db');
module.exports = router;

router.get('/', async (request, response, next) => {
  try {
    const products = await Product.findAll();
    response.json(products);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const product = await Product.create(request.body);
    response.json(product);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (request, response, next) => {
  try {
    const product = await Product.findById(request.params.id);
    response.json(product);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (request, response, next) => {
  try {
    const product = await Product.update(request.body, {
      where: { id: request.params.id }
    });
    response.json(product);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (request, response, next) => {
  try {
    const deleted = await Product.desroy({ where: { id: request.params.id } });
    if (deleted) {
      response.sendStatus(202);
    } else {
      const error = new Error('Invalid request');
      error.status = 400;
      next(error);
    }
  } catch (err) {
    next(err);
  }
});
