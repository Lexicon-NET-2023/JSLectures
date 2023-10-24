const func = (cb) => {

    //Async
    setTimeout(() => {
        cb('callback')
    },1000)
}

func(m => console.log(m)); 


console.log(1);
console.log(2);
console.log(3);
console.log(4);
for(let i = 0; i < 100; i++){
    console.log('blocking' + i)
}
console.log(5);
console.log(6);
console.log(7);
console.log(8);