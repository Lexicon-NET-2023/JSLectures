// var person = {}; //Gör ej
// let person = {};
// const person = {};

// let person = {
//     firstName: 'Kalle',
//     lastName: 'Karlsson',
//     age: 35
// }

// console.log(person);
// person.firstName = 'Nisse';
// console.log(person.firstName);

/* test = {};

console.log(test);

console.log(window.document); */

const user = {
    firstName: 'Kalle',
    lastName: 'Karlsson',
    age: 35,
    adress: {
        street: 'Road',
        nr: 15,
        zipCode: 123456,
        city: 'City'
    },
    phoneNumbers: ['123-456789', '987-654321'],
    isActive: true
}

console.log(user);
console.log(user.adress);

user.firstName = 'Nisse';
console.log(user.firstName);

user.adress.street = 'New road';
console.log(user.adress);

user.FirstName = 'Anna';
console.log(user);

user.email = 'kalle@karlsson.com';

console.log(user);

console.log(user.age);
console.log(user['age']);
let key = 'age'
console.log(user[key]);