const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server on port 27017');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });
    // db.close();

    // db.collection('Users').deleteMany({name: 'Charles'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5900154df9b6e206bf6d0e18")})
    //     .then((result) => {
    //         console.log(JSON.stringify(results, undefined, 2));
    //     });
});
