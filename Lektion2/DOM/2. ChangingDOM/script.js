const div1 = document.querySelector('#div1');
const btn1 = document.querySelector('#btn1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const btn2 = document.querySelector('#btn2');

const changeText = () => div1.innerText = 'New text from JS';

btn1.addEventListener('click', changeText);

btn2.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e.target.nextElementSibling);

    /* let h1 = document.createElement('h1');
    h1.innerText = 'Hej!'
    h1.addEventListener('mouseover', () => {
        console.log('over');
    }
    )
    div3.appendChild(h1);
 */
    //div2.classList.add('upper');
    div2.classList.toggle('upper');

    let text = 'Hej';

    div3.innerHTML = `
    <ul>
    <li>${text}</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    </ul>    
    `
})