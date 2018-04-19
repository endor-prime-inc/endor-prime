const router = require('express').Router();
const { Order, Product } = require('../../db');
module.exports = router;

router.get('/', async (request, response, next) => {
  try {
    const orders = await Order.findAll({ include: [Product] });
    response.json(orders);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const order = await Order.create(request.body);
    response.status(201).json(order);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (request, response, next) => {
  try {
    const order = await Order.findById(request.params.id, {
      include: [Product]
    });
    if (order) {
      response.json(order);
    } else {
      const error = new Error(
        `Could not find order with ID: ${request.params.id}`
      );
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
    const updated = await Order.update(request.body, {
      where: { id }
    });
    if (updated[0]) {
      response.status(200).json(updated[1][0]);
    } else {
      const error = new Error(`No order with the ID ${id}`);
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
    const deleted = await Order.destroy({ where: { id } });
    if (deleted) {
      response.sendStatus(200);
    } else {
      const error = new Error(
        `Could not delete order with ID: ${id}`
      );
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});