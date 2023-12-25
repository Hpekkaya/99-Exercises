
// ----- PROMISE -------

let check =true

const promise1 = new Promise((resolve, reject) => {
    if(check){
        resolve("Promise is Succesful")
    }else {
        reject("Promise is Unsuccesful")
    }
})


console.log(promise1)