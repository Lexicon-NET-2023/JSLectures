let number = 13;
let string = '14';

//två == jämför värdet
console.log(number == string);

//tre === jämför värdet och datatypen
console.log(number === string);

let res = number + string;
console.log(res);
let res2 = number + +string;
console.log(res2);

/*
&& och
|| eller
! inte
< mindre än
> större än
<= mindre än eller lika med
>= större än eller lika med

!== om det inte är lika med och inte har samma datatyp
!= om det inte är lika med
*/

//Ternary
//condition ? expression : expression

// let result = number > +string ? 'true' : {name: 'Kalle'};

// console.log(result.name);

if(number > +string){
    result = true;
    console.log(result);
}
else
{
    let result = 'Kalle'
    console.log(result);
};

const car = {
    color: 'red',
    brand: 'volvo'
}

//console.log(car);

switch(car.color){
    case 'red':
        console.log('Color is red')
        break;
}

