//Array - lista med ett eller flera värden

//names = []; //Gör inte så
//var names = []; //Gör inte så
//let names = []; //Gör så
//const names = []; //Gör så


//Gör ej
const multiArray = ['12', 12, true, {firstName: 'Kalle'}, [1,2,3,4], null];

//console.log(multiArray);

//Gör
const numbers = [1,2,3,4,510,10,9];

//Gör
const users = [
    {firstName: 'Kalle', lastName: 'Karlsson', age: 35},
    {firstName: 'Anna', lastName: 'Andersson', age: 58},
    {firstName: 'Sten', lastName: 'Stensson', age: 97}
]

console.log(users[0]);
console.log(users[0].firstName);

const names = ['Kalle', 'Anna', 'Sten'];
console.log(names);

//.unshift() Lägger till i början av en array
names.unshift('Kajsa');
console.log(names);

//.shift() Tar bort i början av en array
names.shift();
console.log(names);

//.push() Lägger till i slutet av en array
names.push('Kajsa');
console.log(names);

//.pop() Tar bort i slutet av en array
names.pop();
console.log(names);


names[0] = 'Nisse';
console.log(names);

//Sökning på ej existerande värde resulterar i -1
const index = names.indexOf('Nisse');
console.log(index);


//Delete tar bort värdet, men inte positionen, positionen blir undefined
// delete names[0];
// console.log(names);
// console.log(typeof names[0]);
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


console.log(names);
//Tar bort två värden med start på position 1 lägger sedan till två värden
names.splice(1,2, 'Nytt namn', 'Stefan');
console.log(names);

names.splice(1,0, 'Nytt namn igen', 'Lisa');
console.log(names);
console.log(names.length);


//Filter == Where
const notKalle = users.filter(u=>u.firstName !== 'Kalle');
console.log(notKalle);

//Map == Select
const ages = users.map(u=>u.age);
console.log(ages);

//Filter och map
const notKallesAge = users.filter(u=>u.firstName !== 'Kalle').map(u=>u.age);
console.log(notKallesAge);

users.forEach(function(user){
    console.log(user.firstName)
});

users.forEach(u=> console.log(u.firstName));

users.forEach(u=> {
    document.body.innerHTML += `<p> Name: ${u.firstName} </p>`;
});
