const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const { ObjectID } = require('mongodb')
const _ = require('lodash')

const { Mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')
const app = express(http)

const port = process.env.PORT || 3000

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

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const body = _.pick(req.body, ['text', 'completed'])

  if(!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, { $set: body}, {new: true}).then(todo => {
    if(!todo){
      return res.status(404).send()
    }
    res.status(200).send(todo)
  }).catch(e => {
    res.status(400).send(e)
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

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id

  if(!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findByIdAndRemove(id).then(todo => {
    if(!todo){
      return res.status(404).send()
    }
    res.status(200).send(todo)
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
