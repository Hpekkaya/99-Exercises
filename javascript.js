
// var accountA = {
//     name : "Alev Pekkaya",
//     accountNu : 12345678,
//     balance : 2000,
//     addAccount : 1000,
// }
// var accountB = {
//     name : "Kerem Pekkaya",
//     accountNu : 12345678,
//     balance : 3000,
//     addAccount : 2000,
// }

// function withdrawMoney(account, quantity){
//     console.log(`Hello ! ${account.name}`)

//     if (account.balance >= quantity) {
//         console.log('You can withdraw your money')
//     } else {
//         var total = account.balance + account.addAccount;
//         if (total >= quantity) {
//             if (confirm('Would you like to use Additional Account ?'))
//             {console.log('You can receive your money !')}
//         } else {
//             console.log(`In your account(${account.accountNu}) \n There is no ${quantity}`);
//         } else {
//             console.log('Sorry Your balance is not enough ')
//         }
//     } 
    
// }


// withdrawMoney(accountA, 2500)
// withdrawMoney(accountB, 2000)


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

// let check =false

// function createPromise(){
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Promise running as aimed")
//         } else {reject ("There is big problem")}
//     })
// }
// createPromise()
// .then((response)=> console.log(response))
// .catch((error)  => console.log(error))
// .finally(()  => console.log("Always running"))

// ---- PROMISE - XML HTTP REQUEST ---- 

// function readStudents(url){
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         try {
//             xhr.addEventListener("readystatechange", ()=> {
//                 if (xhr.readyState===4 && xhr.status===200) {
//                     resolve(JSON.parse(xhr.responseText))
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }
//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// readStudents("students.json")
// .then((data) => console.log(data))
// .catch((err) => console.log(err))







