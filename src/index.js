const express = require('express')
const bodyParser = require('body-parser')
const authController = require('./controllers/authController')
const port = 3000


const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.listen(port)
app.use('/', router);
app.use('/auth', authController)

module.exports = app
