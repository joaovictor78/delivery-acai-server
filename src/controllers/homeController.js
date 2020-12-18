const express = require('express')
const authMiddleare = require('../middleware/auth')
const router = express.Router()
router.use(authMiddleare)
router.get('/home', (req, res) => {
    res.send('OK')
})

module.exports = router
