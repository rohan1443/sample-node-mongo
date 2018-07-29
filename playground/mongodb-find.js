const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
const URL = 'mongodb://localhost:27017/TodoApp'

MongoClient.connect(URL, (err, client) => {
  if (err) {
    console.log('Unable to connect to the database')
  }
  console.log('connected to the server')
  const db = client.db('TodoApp')

  // db.collection('Users').find().toArray().then(docs => {
  //   console.log('data found')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err => {
  //   console.log('error occured', err)
  // }))

  // db.collection('Todos').findOneAndDelete({ completed: false}).then(doc => {
  //   console.log('doc found', JSON.stringify(doc, undefined, 2))
  // }, err => {
  //   console.log('error occured', err)
  // })

  // db.collection('Todos').findOne({ _id: new ObjectID('5b5c33f01fe9e25e0fc8e417') }).then(doc => {
  //   console.log('doc found', JSON.stringify(doc, undefined, 2))
  // }, err => {
  //   console.log('error occured', err)
  // })

  /** will delete all that matches the criteria */
  //db.collection('Todos').deleteMany({'text': 'I am eating lunch'})

  /** will delete the first one that it finds a match with */
  // db.collection('Todos').deleteOne({'text': 'I am eating lunch'}) 

  //db.collection('Todos').findOneAndDelete({})
  client.close()
})