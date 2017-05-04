const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// const newTodo = new Todo({
//     text: 'Cook Dinner'
// });
//
// newTodo.save()
//     .then((doc) => {
//         console.log('Saved todo', doc);
//     }, (e) => {
//         console.log('Unable to save todo');
//     });

const newTodo2 = new Todo({
    text: 'Eat Dinner',
    completed: true,
    completedAt: 5
});

newTodo2.save()
    .then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2 ));
    }, (e) => {
        console.log('Unable to save todo');
    });
