const router = require('express').Router()
const addProducts = require('./admin/addProducts')
const getProducts = require('./products/getProducts')
const getSpecificProduct = require('./products/getSpecificProduct')

// Post requests
router.post('/addProducts', addProducts)

// Get requests
router.get('/getProducts',getProducts)
router.get('/getSpecificProduct',getSpecificProduct)

module.exports = router