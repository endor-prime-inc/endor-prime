const router = require('express').Router()
module.exports = router

router.use('/google', require('./google'))
router.use('/local', require('./local'))

router.use((req, res, next) => {
  const err = new Error('Auth route not found')
  err.status = 404
  next(err)
})
