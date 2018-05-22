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

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b03015fecfe390491b5d5bc')
  },
    {
      $set: {
        completed: false
      }
    }, {
      returnOriginal: false
    }
  ).then((res) => {
    console.log(res)
  })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b0093f01655d51810889924')
  }, {
      $set: {
        name: 'Deep'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }
  ).then((res) => {
    console.log(res)
  })
  // db.close();
});
