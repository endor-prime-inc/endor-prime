const router = require('express').Router();
const { User } = require('../../db');
module.exports = router;

// GET /api/users
// Hm...should everyone really be able to get these...?
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});
