const namesArray = ['Kalle', 'Sven', 'Anna', 'Göran', 'Susanna', 'Siv'];


const usersArray = [
    { id: '1', name: 'Kalle', email: 'kalle@karlsson.com', age: 37, status: true },
    { id: '2', name: 'Sven', email: 'sven@svensson.com', age: 52, status: false },
    { id: '3', name: 'Anna', email: 'anna@andersson.com', age: 28, status: true },
    { id: '4', name: 'Göran', email: 'goran@goransson.com', age: 68, status: false },
    { id: '5', name: 'Susanna', email: 'susanna@svensson.com', age: 87, status: false },
    { id: '6', name: 'Siv', email: 'siv@olofsson.com', age: 59, status: true }
]

//For loop

for (let i = 0; i < 5; i++) {
    console.log(i, namesArray[i]);
}

console.log('----------------------')

console.log(namesArray.length);

for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}

console.log('----------------------')

//Foreach

for(let user of usersArray){
    console.log(user.id, user.name, user.email);
}

console.log('----------------------')

for(let prop in usersArray[0]){
 console.log(prop, usersArray[0][prop]);
}

console.log('----------------------')

//while
let i = 1;
do{
    console.log('do while: ' + i);
    i++;
} while(i<7);
