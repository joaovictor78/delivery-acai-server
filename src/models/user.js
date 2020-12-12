const mongoose = require('../database')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;
const schema = new Schema({
     nome : {
          type: String,
          require: true
     },
     email: {
          type: String,
          unique: true,
          required: true,
          lowercase: true

     },
     senha: {
          type: String,
          unique: true,
          required: true,
          select: false

     },
     createdAt: {
          type: Date,
          default: Date.now       
     }
});
schema.pre('save', async function (next) {
     const hash = await bcrypt.hash(this.senha, 10)
     this.senha = hash

     next()
})
const User = mongoose.model('User', schema);

module.exports = User