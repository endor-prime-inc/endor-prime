const router = require('express').Router();
const { Review, User, Product } = require('../../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({ include: [User, Product] });
    reviews.length
      ? res.status(200).json(reviews)
      : res.status(404).json('No reviews found');
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id, { include: [User, Product] });
    review
      ? res.status(200).json(review)
      : res.status(404).json('Review not found');
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    review
      ? res.status(201).json(review)
      : res.status(400).json('Bad request.');
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    let review = await Review.findById(id);
    if (review) {
      review = await review.update(req.body);
      res.status(200).json(review);
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  review
    ? res.status(200).json(await review.destroy())
    : res.status(400).json('Bad request');
});
