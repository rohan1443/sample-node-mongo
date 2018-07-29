const Mongoose = require('mongoose')

const URL = "mongodb://localhost:27017/TodoApp"

Mongoose.Promise = global.Promise
Mongoose.connect(URL, { useNewUrlParser: true })

module.exports = { Mongoose }