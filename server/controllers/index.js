const router = require('express').Router()
const addProducts = require('./admin/addProducts')

// Post requests
router.post('/addProducts', addProducts)
module.exports = router