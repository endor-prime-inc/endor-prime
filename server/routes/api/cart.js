const router = require('express').Router();

router.get('/', (request, response, next) => {
  try {
    response.json(request.session.cart || {});
  } catch (error) {
    next(error);
  }
});

router.put('/', (request, response, next) => {
  try {
    request.session.cart = request.body;
    response.status(200).json(request.session.cart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
