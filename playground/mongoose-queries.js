const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '590e98431f696b26f20cf5ef11';
//
// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '590b8b9d5b1fbf16b8647cc9';

if (!ObjectID.isValid(id)) {
    console.log('User ID is not valid');
} else {
    User.findById(id)
        .then((user) => {
            if (!user) {
                return console.log('User ID not found');
            }
            console.log('User by ID', user);
        }).catch((e) => console.log(e));
}
