const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server on port 27017');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59093285ba97c18bd278fc7f")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOrigional: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("590014e2b57eb206ba805261")
    // }, {
    //     $set: {
    //         name: 'Charles'
    //     },
    //     $inc: {
    //         age: +1
    //     }
    // }, {
    //     returnOrigional: false
    // }).then((result) => {
    //     console.log(result);
    // })

    //db.close()
});
