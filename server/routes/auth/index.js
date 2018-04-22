const router = require('express').Router();
module.exports = router;

// GET /auth
router.get('/', (req, res, next) => {
  res.json(req.user || {});
});

// DELETE /auth
router.delete('/', (req, res, next) => {
  req.logout();
  req.session.destroy(err => {
    if (err) return next(err);
    res.status(204).end();
  });
});

router.use('/google', require('./google'));
router.use('/local', require('./local'));

router.use((req, res, next) => {
  const err = new Error('Auth route not found');
  err.status = 404;
  next(err);
});
