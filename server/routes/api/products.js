const router = require('express').Router();
const { Product, Category, Review } = require('../../db');
module.exports = router;

const reviewAggregator = instance => ({
  ...instance.toJSON(),
  ratingsCount: instance.reviews.length,
  ratingsAvg:
    Math.floor(
      10 *
        (instance.reviews.reduce((acc, review) => acc + review.rating, 0) /
          instance.reviews.length)
    ) / 10
});

router.get('/', async (request, response, next) => {
  try {
    const products = await Product.findAll({ include: [Category, Review] });
    const json = products.map(instance => ({
      ...reviewAggregator(instance),
      reviews: undefined
    }));

    console.log(json);
    response.json(json);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const product = await Product.create(request.body);
    response.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (request, response, next) => {
  try {
    const product = await Product.findById(request.params.id, {
      include: [Category, Review]
    });
    if (product) {
      response.json(reviewAggregator(product));
    } else {
      const error = new Error(
        `Could not find product with ID: ${request.params.id}`
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
    const updated = await Product.update(request.body, {
      where: { id: request.params.id }
    });
    if (updated[0]) {
      response.status(200).json(updated[1][0]);
    } else {
      const error = new Error(`No category with the ID ${request.params.id}`);
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (request, response, next) => {
  try {
    const deleted = await Product.destroy({ where: { id: request.params.id } });
    if (deleted) {
      response.sendStatus(200);
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
