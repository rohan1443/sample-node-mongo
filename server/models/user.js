const Mongoose = require('mongoose')

var User = Mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

module.exports = { User }