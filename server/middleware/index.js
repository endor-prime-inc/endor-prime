const router = require('express').Router()
module.exports = router

router.use(require('./logging'))
router.use(require('./body-parsing'))
router.use(require('./session'))
router.use(require('./static'))
