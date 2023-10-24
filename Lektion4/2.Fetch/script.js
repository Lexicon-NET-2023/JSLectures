//HTTP request methods
//GET - Hämta data
//POST - Skriva data
//PUT - Uppdaterar hela objektet
//PATCH - Uppdaterar hela eller delar av objektet
//DELETE - Tar bort ett object

const btnText = document.querySelector('#btnText');
const textOutput = document.querySelector('#text-output');

// btnText.addEventListener('click', function (){
//     fetch('text.txt')
//          .then(function(res){
//             console.log(res);
//             return res.text(); 
//          })
//          .then(function(data){
//             console.log(data);
//             textOutput.innerHTML = `<p>${data}</p>`
//          })
// })

btnText.addEventListener('click', function (){
    fetch('text.txt')
        .then(res => res.text())
        .then(data => textOutput.innerHTML = `<p>${data}</p>`)
        .catch(err => console.log('Error: ', err))
})

const btnJson = document.querySelector('#btnJson');
const jsonOutput = document.querySelector('#json-output');


const getJson = () =>{
    fetch('json.json')
        .then(res =>{
            if(res.ok)
              return res.json();
            throw new Error('Error when fetching from JSON'); 
        })
        .then(data => {
            console.log(data);

            jsonOutput.innerHTML = '';

            data.forEach(post =>{
                jsonOutput.innerHTML += 
                `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
                `
            })
        })
        .catch(err => console.log(err))
}

btnJson.addEventListener('click', getJson);



const btnGit = document.querySelector('#btnGit');
const gitOutput = document.querySelector('#git-output');

const getGit = () =>{
    fetch('https://api.github.com/users/Lexicon-NET-2023/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok)
         return res.json();
        throw new Error('Failed to get repos');
    })
    .then(data => {
        console.log(data);

        gitOutput.innerHTML = '';

        data.forEach(repo => {
            gitOutput.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${repo.name}</h3>
                    <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                    <p class="card-text">This repo is mainly written in ${repo.language}</p>
                    <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                    <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                </div>
            </div>
            `
        })
    })
    .catch(err => console.log('Error: ' + err));
}


btnGit.addEventListener('click', getGit);



const btnGitAsync = document.querySelector('#btnGitAsync');
const gitAsyncOutput = document.querySelector('#git-asyncoutput');


const getGitAsync = async () =>{
    const res = await fetch('https://api.github.com/users/Lexicon-NET-2023/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await res.json();
    gitAsyncOutput.innerHTML = '';

    data.forEach(repo => {
        gitAsyncOutput.innerHTML +=
        `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${repo.name}</h3>
                    <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                    <p class="card-text">This repo is mainly written in ${repo.language}</p>
                    <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                    <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                </div>
            </div>
            `
    })

}

btnGitAsync.addEventListener('click', getGitAsync);
