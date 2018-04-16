const router = require('express').Router()
const morgan = require('morgan')
module.exports = router

// Logging middleware
router.use(morgan('dev'))
