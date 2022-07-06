const Product = require('../../models/Products')
const getSpecificProduct = async (req, res) => {
    const { slug } = req.query
    const getSpecificProduct = await Product.findOne({ slug })
    if (!getSpecificProduct) return res.json({ status: 0, data: null })
    return res.json({ status: 1, data: getSpecificProduct })
}
module.exports = getSpecificProduct