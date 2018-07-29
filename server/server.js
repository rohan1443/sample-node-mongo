const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

const { Mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')
const app = express(http)

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  console.log(req.body)
  const newTodo = new Todo({
    text: req.body.text
  })

  newTodo.save().then(doc => {
    res.send(doc)
  }, err => {
    res.send(err)
  })
})

app.listen(3000, () => {
  console.log('server started on port 3000')
})
