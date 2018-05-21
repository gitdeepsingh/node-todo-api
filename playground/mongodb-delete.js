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
  //deleteMant
  // db.collection('Todos').deleteMany({ text: 'had dinner' }).then((res) => {
  //   console.log(res);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat dinner' }).then((res) => {
  //   console.log(res);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: true }).then((res) => {
  //   console.log(res);
  // })

  //Users

  // db.collection('Users').deleteMany({ name: 'Deep' }).then((res) => {
  //   console.log(res);
  // })
  
  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b030417ecfe390491b5d76f') }).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  })
  // db.close();
});