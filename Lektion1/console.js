console.log('Hello');
console.warn('Warning');
console.error('Error');

var age = 34; 

//age = 'Kalle';

//let age2 = '34';
const age3 = 34;

//console.log(age);

if(age3 === '34')
{
    let age2 = 35; //Local variabel
    console.log(age2);
    var firstName = 'Kalle'; //Global variabel 
}
else
{
    console.log('Wrong!')
}

//console.log(age2);
console.log(age, firstName, age3);