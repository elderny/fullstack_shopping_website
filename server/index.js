const app = require('express')(),
    bodyParser = require('body-parser').json(),
    morgan = require('morgan')('dev'),
    dotenv = require('dotenv').config(),
    mongoose = require('mongoose'),
    PORT = 5000 || process.env.PORT

app.use(bodyParser, morgan)
mongoose.connect('mongodb://127.0.0.1:27017/shopping_website')
app.use('/api', require('./controllers'))
app.listen(PORT)