const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dbAcaiUniverso:123admin@cluster0.01o7q.mongodb.net/dbAcaiUniverso?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true})
mongoose.Promise = global.Promise

module.exports = mongoose
