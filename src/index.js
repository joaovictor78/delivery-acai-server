const express = require('express')
const bodyParser = require('body-parser')
const authController = require('./controllers/authController')
<<<<<<< HEAD
const cors = require('cors')
const port = 3000
=======
const port = process.env.PORT || 8080
>>>>>>> 2f8fb31ac867dd672d2f0d1588c126a005bf8daa


const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.listen(process.env.PORT ||  port)
app.use('/', router);
app.use('/auth', authController)

module.exports = app
