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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertOne({
    name: "Andrew",
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('error inserting data to the collection')
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  client.close()
})