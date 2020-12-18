const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(401).send({erro: "Token não informado"})
    }
    const parts = authHeader.split(' ')
    if(!parts.length === 2){
        return res.status(401).send({erro: "Token não encontrado"})
    }

    const [tipo, token] = parts
    if(!/^Bearer$/i.test(tipo)){
            res.status(401).send({erro: 'Token Mal formatado'})
        }
    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) {
            return res.status(401).send({erro: "Token invalido"})
        }
        req.userId = decoded.id
        return next()
    })   
}