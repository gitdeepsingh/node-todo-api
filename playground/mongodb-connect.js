// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.warn('Unable to connect to Mongo DB.');
  }
  console.warn('Successfully connected to Mongo DB.');
  const db = client.db('TodoApp')
  // db.collection('Todos').insertOne(
  //   {
  //     text: 'Something',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.warn('Unable to insert todo', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2))
  //   }); 

//   db.collection('Users').insertOne(
//     {
//       name: 'Deep Singh',
//       age: 25,
//       location: 'Bengaluru'
//     },
//     (err, result) => {
//       if (err) {
//         return console.warn('Unable to insert users', err);
//       }
//       console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
//     });

//   client.close();
});