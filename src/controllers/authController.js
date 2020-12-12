const express = require('express')
const User = require('../models/User')
const app = require('../index')
const router = express.Router()

router.post('/register', async (req, res) => {
    try{
        const { email } = req.body
        if(await User.findOne({ email })){
            return res.status(400).send({error: 'Erro: O usuario já existe'})
        }
        const user = await User.create(req.body)
        user.senha = undefined
        return res.send({user})
    } catch(error){
        return res.status(400).send({error : 'Erro: Falha ao registrar'})
    }
})

module.exports = router