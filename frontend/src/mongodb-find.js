const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to MongoDB server');
  }
  db.collection('ToDos').find().toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Cannot find any data', err);
  });
  //db.close();
  });

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to MongoDB Server');
  }
});
