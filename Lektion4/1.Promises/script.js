const promiseFunc = (ok) => {
    return new Promise((resolve, reject) => {
        if (ok) {
            resolve('Success')
        }
        else {
            reject('Error')
        }
    });
}

// var res = promiseFunc(true);
// console.log(res);

// promiseFunc(false)
//             .then(data => console.log(data))
//             .catch(error => console.log(error));


class DataBase {
    static get(id, cb) {
        console.log(1);
        console.log(2);

        setTimeout(() => {
            cb(true, { id: id, prodName: 'Phone' });
        }, 1000)

        console.log(3);
        console.log(4);
        console.log(5);
    }
}

// const getFromDb = function (id) {
//     return new Promise((resolve, reject) => {
//         DataBase.get(id, (isOK, data) => {
//             if (isOK) {
//                 resolve(data);
//             }
//             else {
//                 reject('Failed to get from DB');
//             }
//         })
//     })
// }

// getFromDb(12)
//         .then(data => console.log(data))
//         .catch(error => console.log(error));




const getFromDbAsync = async function(id){
    return new Promise((resolve, reject)=>{
        DataBase.get(id, (isOK, data) =>{
            if(isOK){
                resolve(data);
            }
            else{
                reject('Failed to get from DB');
            }
        })
    })
}

await getFromDbAsync(12)
            .then(data => console.log(data))
            .catch(error => console.log(error));


console.log(6);
console.log(7);
console.log(8);