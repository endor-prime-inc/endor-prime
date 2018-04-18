const router = require('express').Router();
const { Review, User, Product } = require('../../db');
module.exports = router;

router.get('/', async (request, response, next) => {
  try {
    const reviews = await Review.findAll({ include: [User, Product] });
    reviews.length
      ? response.status(200).json(reviews)
      : response.status(404).json('No reviews found');
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const review = await Review.findById(id, { include: [User, Product] });
    review
      ? response.status(200).json(review)
      : response.status(404).json('Review not found');
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const review = await Review.create(request.body);
    review
      ? response.status(201).json(review)
      : response.status(400).json('Bad request.');
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
      response.status(400).json('Bad request');
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const review = await Review.findById(id);
    review
      ? response.status(200).json(await review.destroy())
      : response.status(400).json('Bad request');
  } catch (error) {
    next(error);
  }
});
