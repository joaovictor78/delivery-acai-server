const express = require('express')
const User = require('../models/user')
const app = require('../index')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')


function generateToken(params = {}){
    const token = jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, 
    })
    return token
}
router.post('/login', async (req, res) => {
    const {email, senha} = req.body
    const user = await User.findOne({email}).select('+senha')
    try{
        if(!user){
            res.status(400).send({error: 'Erro: Usuario não existe'})
        }
        if(!await bcrypt.compare(senha, user.senha)){
            res.status(400).send({error: 'Erro: Senha incorreta'})
        }
        user.senha = undefined
        token = generateToken({id: user.id})
        return res.send({user, token})

    } catch(error){
        return res.status(400).send({error : 'Erro: Falha ao registrar'})
    }
})
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