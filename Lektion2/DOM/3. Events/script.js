const btn = document.querySelector('#btnAlert');
const btn1 = document.querySelector('#btn1');
const form = document.querySelector('#loginForm');
const output = document.querySelector('#output');
const square = document.querySelector('#square');

document.querySelectorAll('p')
.forEach(p=>p.addEventListener('click', (e) => console.log('Working', e.target)));

// btn.addEventListener('click', function(e){
//     alert('event triggered!');
// })
// btn.addEventListener('dblclick', function(e){
//     alert('event triggered!');
// })
// btn.addEventListener('mousedown', function(e){
//     alert('event triggered!');
// })
// btn.addEventListener('mouseup', function(e){
//     alert('event triggered!');
// })
// btn.addEventListener('mouseenter', function(e){
//     alert('event triggered!');
// })
// btn.addEventListener('mouseleave', function(e){
//     alert('event triggered!');
// })


// form['firstName'].addEventListener('focus', function(e){
//     console.log('focus');
//     this.classList.add('focus')
// });
// form['firstName'].addEventListener('blur', function(e){
//     console.log('blur');
//     this.classList.add('blur')
// });

// form['firstName'].addEventListener('change', function(e){
//     console.log(this.value)
// })

// form['firstName'].addEventListener('change', (e)=>{
//     console.log(e.target.value)
// })

// form.addEventListener('submit', (e)=>{
// e.preventDefault();

// output.innerHTML += `<p>${e.target[0].value} ${e.target[1].value} </p>`;

// e.target.reset();
// })

let counter = 1;

btn1.addEventListener('click', (e)=>{
    output.innerHTML += `
    <div>
        <p>Hej: ${counter++} </p>
        </div>
    `
})

output.addEventListener('click', (e) =>{
    console.log(e.target);
    e.target.remove();
})

square.addEventListener('mousemove', e =>{
    //console.log(e);
    //console.log(e.offsetX);
    square.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`
})

