const { ObjectID } = require('mongodb')

const { Mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

const id = "6b5dbc063278b5105109a08612"

console.log(ObjectID.isValid(id))

Todo.find({
  _id: id
}).then(docs => {
  console.log('Todos', docs)
}, err => {
  console.log('err', err)
})

Todo.findOne({
  _id: id
}).then(doc => {
  console.log('doc', doc)
}, err => {
  console.log('err', err)
})

Todo.findById(id).then(doc => {
  console.log('doc', doc)
}).catch(e => {
  console.log('err', e)
})