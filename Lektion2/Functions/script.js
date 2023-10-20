//let age = 50;
//var firstName;


/* if(true){
 var age = 45;
    console.log('Inne i kodblocket', age);

    if(true){
        let age = 10;
        var global = 'var';
        console.log('Inne i andra kodblocket', age, global, firstName)
    }
}

console.log('Utanför kodblock', age, global);

//let firstName = 'Nisse';
//const firstName = 'Nisse';
var firstName = 'Nisse'; */

//---------------------------

function hej(){
    console.log('Hej');
}

const hej2 = function(){
    console.log('Hej2');
}

const hej3 = () => console.log('Hej3');


// const hej2 = function(){
//     console.log('Hej2');
// }

hej();
hej2();
hej3();

console.log('--------------------------')


function calc(num1, num2){
    const sum = +num1 + +num2;
    console.log(sum);
    return sum;
}

calc(2,'4');

let sum = calc(2, 3);
console.log(sum);

function calc2(num1 = 0, num2 = -1){
    const sum = +num1 + +num2;
    console.log(sum);
    return sum;
}

calc2(2, 1);

const calc3 = (num1 = 0, num2 = -1) => num1 + num2;

var sum2 = calc3();
console.log(sum2);

const calc4 = (num1 = 1, num2 = 2) =>{
    console.log(num1,num2)
    return num1 + num2;
}

calc4(2,4);

console.log('--------------------------')

const argumentFunc = function(num1){
console.log(num1);
console.log(arguments[2]);
console.log('------------');
for(const arg of arguments){
    console.log(arg);
}
}

argumentFunc(1,6, 'hej', {firstName: 'Kalle'}, [1,5,6,7]);

console.log('--------------------------')

const callBackFunc = (nr1, nr2, cb) =>{
    let sum = nr1 + nr2;

    // setTimeout(()=>{
        cb(sum);
    //}, 2000);
}

callBackFunc(2,3, (sum) => console.log('Sum: '+ sum));

callBackFunc(5,3, function(sum){
    console.log('Sum: ' + sum);
});

const test = function(sum){
    console.log('Sum:' + sum);
};

callBackFunc(5,5, test);

const callBack2 = (numbers, cb) =>{
 const numbersWhichMeetCriteria = [];
 
 for(const num of numbers){
    if(cb(num)){
        numbersWhichMeetCriteria.push(num);
    }
 }
 return numbersWhichMeetCriteria;
}

var res5 = callBack2([1,4,6,34,75,100,53,2], (num) => num < 50);
console.log(res5);

console.log('--------------------------')

//Methods

const names = ['Kalle', 'Sten', 'Anna'];

names.forEach(fName =>{
    console.log(fName);
})

let kallesName = names[0];
console.log(kallesName.toUpperCase());

const user = {
    firstName: 'Kalle',
    lastName: 'Karlsson',
    getFullName: function(){
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    },
    getFullName2: () =>{
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.getFullName());
console.log(user.getFullName2());