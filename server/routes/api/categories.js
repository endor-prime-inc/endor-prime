const { Category, Product } = require('../../db');
const router = require('express').Router();

router.get('/', async (request, response, next) => {
  try {
    const categories = await Category.findAll();
    response.json(categories);
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
  const { id } = request.params;
  try {
    const category = await Category.findById(id, {
      include: [Product]
    });
    if (category) {
      response.json(category);
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
    const [numUpdated, updatedRows] = await Category.update(request.body, {
      where: { id },
      returning: true
    });
    
    if (numUpdated > 0) {
      response.status(200).json(updatedRows[0]);
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
      response.json({ id, message: 'Deleted successfully' });
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
