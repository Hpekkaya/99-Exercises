
var accountA = {
    name : "Alev Pekkaya",
    accountNu : 12345678,
    balance : 2000,
    addAccount : 1000,
}
var accountB = {
    name : "Kerem Pekkaya",
    accountNu : 12345678,
    balance : 3000,
    addAccount : 2000,
}

function withdrawMoney(account, quantity){
    console.log(`Hello ! ${account.name}`)

    if (account.balance >= quantity) {
        console.log('You can withdraw your money')
    } else {
        var total = account.balance + account.addAccount;
        if (total >= quantity) {
            if (confirm('Would you like to use Additional Account ?'))
            {console.log('You can receive your money !')}
        } else {
            console.log(`In your account(${account.accountNu}) \n There is no ${quantity}`);
        } else {
            console.log('Sorry Your balance is not enough ')
        }
    } 
    
}


withdrawMoney(accountA, 2500)
withdrawMoney(accountB, 2000)




