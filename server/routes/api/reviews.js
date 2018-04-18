const router = require('express').Router();
const { Review, User, Product } = require('../../db');
module.exports = router;

router.get('/', async (request, response, next) => {
  try {
    const reviews = await Review.findAll({ include: [User, Product] });
    if (reviews.length) {
      response.status(200).json(reviews);
    } else {
      const error = new Error('No reviews found');
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const review = await Review.findById(id, { include: [User, Product] });
    if (review) {
      response.status(200).json(review);
    } else {
      const error = new Error('Review not found');
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const review = await Review.create(request.body);
    if (review) {
      response.status(201).json(review);
    } else {
      const error = new Error('Bad request');
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    let review = await Review.findById(id);
    if (review) {
      review = await review.update(request.body);
      response.status(200).json(review);
    } else {
      const error = new Error('Bad request');
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const review = await Review.findById(id);
    if (review) {
      response.status(200).json(await review.destroy());
    } else {
      const error = new Error('Bad request');
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});
