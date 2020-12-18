const express = require('express')
const bodyParser = require('body-parser')
const authController = require('./controllers/authController')
const homeController = require('./controllers/homeController')
const cors = require('cors')
const port = 3000


const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.listen(process.env.PORT ||  port)
app.use('/', router);
app.use('/auth', authController)
app.use('/', homeController)
module.exports = app
