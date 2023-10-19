/*
Javascript Datatyper
------------------------------------------------------------
String = Text
Number = Tal, decimaltal, stora tal
Boolean = sant/falskt
null = Tomt, ingenting alls (sätts manuellt)
undefined = Tomt, har ej blivit definierad ännu (automatisk)
Object = ett objekt/klass som innehåller ett eller flera värden
Array = Lista med ett eller flera värden
*/

// let text = null;
// let text2; 
// console.log(text); //null
// console.log(text2); //undefined

//var = global variable - kommer åt överallt

//let = lokal variabel - kommer bara åt i samma scope
//const lokal konstant variabel - kan ej skrivas över (finns undantag)

let firstName = "Kalle"; //Undvik " "
let lastName = 'Karlsson'; // Använd ' '

let fullName = firstName + ' ' + lastName;
let fullName2 = `${firstName} ${lastName}`;

// console.log(firstName);
// console.log(lastName);
// console.log(fullName);
// console.log(fullName2);

// firstName = 5;
// firstName = [];
// firstName = {};
// firstName = 'Nisse';

// console.log(firstName);
// console.log(firstName.length);
// console.log(firstName[0]);

// let values = fullName.split(' ');
// console.log(values);




/*Numbers
-------------------------

Math operators

+ lägg till
- ta bort
* gångra
** upphöjt i
/ dela
% division remainder 

++ öka med 1
-- minska med 1

= lika med
+= lägg till
-= ta bort
*= gångra och lägg till
/= dela och lägg till
%= division remainder

*/

// let nr1 = 10;
// let nr2 = 2.5;

// console.log(nr1);
// console.log(nr2);
// console.log(nr1 = nr1 +1);
// console.log(nr1 += 1);
// console.log(nr1++);

let dataType;
console.log(typeof dataType);

dataType = 'Text';
console.log(typeof dataType);

dataType = 45;
console.log(typeof dataType);

dataType = null;
console.log(typeof dataType);

dataType = true;
console.log(typeof dataType);

dataType = {};
console.log(typeof dataType);

dataType = [];
console.log(typeof dataType);


