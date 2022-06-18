const router = require('express').Router()
const addProducts = require('./admin/addProducts')
const getProducts = require('./products/getProducts')

// Post requests
router.post('/addProducts', addProducts)

// Get requests
router.get('/getProducts',getProducts)

module.exports = router