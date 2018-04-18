const { Category, Product } = require('../../db');
const router = require('express').Router();

router.get('/', async (request, response, next) => {
  try {
    const categories = await Category.findAll();
    if (categories.length) {
      response.json(categories);
    } else {
      const error = new Error('No categories found');
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const category = await Category.create(request.body);
    response.status(201).json(category);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (request, response, next) => {
  const { id } = request.body;
  try {
    const category = await Category.findById(id, {
      include: [Product]
    });
    if (category) {
      response.json(category)
    } else {
      const error = new Error(`No category found`);
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (request, response, next) => {
  const { id } = request.params;
  try {
    const updated = await Category.update(request.body, {
      where: { id }
    });
    if (updated[0]) {
      response.status(201).json(updated[1][0]);
    } else {
      const error = new Error(`No category with the ID ${id}`);
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});


router.delete('/:id', async (request, response, next) => {
  const { id } = request.params;
  try {
    const destroyed = await Category.destroy({
      where: { id }
    });
    if (destroyed > 0) {
      response.json({ message: 'Deleted successfully' });
    } else {
      const error = new Error(`We have no category with the ID ${id}`);
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
