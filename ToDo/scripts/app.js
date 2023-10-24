import Item from "./item.js";


//console.log(window);

((todo) => {
    const items = document.querySelector('#toDoItems');

    todo.addItem = function(e){
    e.preventDefault();
    const input = this['todoInput'];
    console.log(input.value);
    addItemToDom(new Item(input.value, false));
    input.value = ''; 
    }

    function addItemToDom(item){
    items.insertAdjacentHTML('beforeend',
    ` <li class="list-group-item ${item.isChecked ? 'change' : ''}">
    ${item.text}
    <button class="btn btn-danger">X</button>
    </li>`);

    let lastChild = items.lastElementChild;
    lastChild.addEventListener('click', change);
    lastChild.querySelector('button').addEventListener('click', remove)
    }

    function change(){
    this.classList.toggle('change');
    }

    function remove(){
        this.parentElement.remove();
    }

    todo.save = function(){
        let items = document.querySelectorAll('li');
        let res = Array.from(items).map(i => new Item(i.childNodes[0].textContent, i.classList.contains('change')));
        localStorage.setItem('items', JSON.stringify(res));
    }

    todo.load = function(){
        let result = JSON.parse(localStorage.getItem('items'));
        console.log(result);
        result.forEach(i => addItemToDom(i));
    }

})(window.todo = window.todo || {});


document.querySelector('#todoForm').addEventListener('submit', todo.addItem);
document.querySelector('#save').addEventListener('click', todo.save);
document.querySelector('#load').addEventListener('click', todo.load);


/* const items = document.querySelector('#toDoItems');

const addItem = function(e){
e.preventDefault();
const input = this['todoInput'];
console.log(input.value);
addItemToDom(new Item(input.value, false));
input.value = ''; 
}

function addItemToDom(item){
items.insertAdjacentHTML('beforeend',
` <li class="list-group-item ${item.isChecked ? 'change' : ''}">
${item.text}
<button class="btn btn-danger">X</button>
</li>`);

let lastChild = items.lastElementChild;
lastChild.addEventListener('click', change);
lastChild.querySelector('button').addEventListener('click', remove)
}

function change(){
this.classList.toggle('change');
}

function remove(){
    this.parentElement.remove();
}

 const save = function(){
    let items = document.querySelectorAll('li');
    let res = Array.from(items).map(i => new Item(i.childNodes[0].textContent, i.classList.contains('change')));
    localStorage.setItem('items', JSON.stringify(res));
}

const load = function(){
    let result = JSON.parse(localStorage.getItem('items'));
    console.log(result);
    result.forEach(i => addItemToDom(i));
}


document.querySelector('#todoForm').addEventListener('submit', addItem);
document.querySelector('#save').addEventListener('click', save);
document.querySelector('#load').addEventListener('click', load); */