
// ----- PROMISE -------

// let check =true

// const promise1 = new Promise((resolve, reject) => {
//     if(check){
//         resolve("Promise is Succesful")
//     }else {
//         reject("Promise is Unsuccesful")
//     }
// })

// console.log(promise1)

let check =false

function createPromise(){
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise running as aimed")
        } else {reject ("There is big problem")}
    })
}
createPromise()
.then((response)=> console.log(response))
.catch((error)  => console.log(error))
.finally(()  => console.log("Always running"))
