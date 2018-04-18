const router = require('express').Router();
const { Product } = require('../../db');
module.exports = router;

router.get('/', async (request, response, next) => {
  try {
    const products = await Product.findAll();
    response.json(products);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const product = await Product.create(request.body);
    response.json(product);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (request, response, next) => {
  try {
    const product = await Product.findById(request.params.id);
    if (product) {
      response.json(product);
    } else {
      const error = new Error(
        `Could not find product with id: ${request.params.id}`
      );
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (request, response, next) => {
  try {
    const product = await Product.update(request.body, {
      where: { id: request.params.id }
    });
    response.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (request, response, next) => {
  try {
    const deleted = await Product.desroy({ where: { id: request.params.id } });
    if (deleted) {
      response.sendStatus(202);
    } else {
      const error = new Error(
        `Could not delete product with ID: ${request.params.id}`
      );
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});