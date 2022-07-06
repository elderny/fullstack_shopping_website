const ProductSchema = require('../../models/Products')
const getProducts = async (req, res) => {
    const data = await ProductSchema.find()
    let sortedData = {}
    let HighestQtyData = []
    data.forEach(e => {
        if (e.qty > 0) {
            if (e.title in sortedData) {
                HighestQtyData.push({ qty: e.qty, price: e.price })
                let max = HighestQtyData.reduce((a, b) => a.qty > b.qty ? a : b)
                sortedData[e.title].price = max.price
                sortedData[e.title].qty += e.qty
                if (!sortedData[e.title].color.includes(e.color)) sortedData[e.title].color.push(e.color)
                if (!sortedData[e.title].size.includes(e.size)) sortedData[e.title].size.push(e.size)
            } else {
                sortedData[e.title] = JSON.parse(JSON.stringify(e))
                sortedData[e.title].color = [e.color]
                sortedData[e.title].size = [e.size]
                HighestQtyData.push({ qty: e.qty, price: e.price })
            }
        }
    })
    res.json(sortedData)
}
module.exports = getProducts