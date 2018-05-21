// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.warn('Unable to connect to Mongo DB.');
  }
  console.warn('Successfully connected to Mongo DB.');
  // const db = client.db('TodoApp')
  // db.collection('Todos').find({
  //   _id: new ObjectID('5afc813112780a0c049f3f11')
  // }).toArray().then((docs) => {
  //   console.log('TODOs: ');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.warn('Unable to fetch the todo', err);
  // })

  // const db = client.db('TodoApp')
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`TODOs count: ${count}`);
  // }, (err) => {
  //   console.warn('Unable to fetch the todo', err);
  // })

  const db = client.db('TodoApp')
  db.collection('Users').find({ name: 'Deep' }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.warn('Unable to fetch the todo', err);
  })

  // db.close();
});