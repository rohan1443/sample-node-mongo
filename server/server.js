const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const { ObjectID } = require('mongodb')

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
    res.status(200).send(doc)
  }, err => {
    res.status(400).send(err)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then(result => {
    res.send({result})
  }, err => {
    res.status(400).send(err)
  })
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if(!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(id).then(todo => {
    if(!todo){
      return res.status(404).send()
    }
    res.status(200).send(todo)
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.listen(3000, () => {
  console.log('server started on port 3000')
})
