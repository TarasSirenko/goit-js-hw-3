/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  
  balance: 0,

    transactions: [],

 
    createTransaction(amount, type) {
        const transaction = { amount, type }
        transaction.amount = amount
        transaction.type = type
        return transaction
  },

  
    deposit(amount) {
        const deposit = this.createTransaction(amount, 'deposit')
        account.transactions.push(deposit)
    },
    

  
    withdraw(amount) {
        if (this.getBalance() >= amount) {
            const withdraw = this.createTransaction(amount, 'withdraw')
            account.transactions.push(withdraw)
            return console.log('Операция успешна')
        }
        return console.log('снятие такой суммы не возможно, недостаточно средств');
  },

  
    getBalance() {
        for (let transaction of this.transactions) {
            if (transaction.type === 'deposit') {
                this.balance += transaction.amount
            } else {
                this.balance = this.balance - transaction.amount
            }
        }
        return this.balance
  },

  
  getTransactionDetails(id) {},

  
    getTransactionTotal(type) {
        let totalDeposit = 0
        let totalWithdraw = 0
        for (let transaction of this.transactions) {
            // console.log(transaction.type);
            if (transaction.type === 'withdraw') {
                totalWithdraw += transaction.amount
                
            } 
            if (transaction.type === 'deposit') {
                totalDeposit += transaction.amount              
            }
            
        }
        console.log(`Всего сняли ${totalWithdraw} кредитов`), console.log(`Всего внесли ${totalDeposit} кредитов`); 
  },
};

console.log(account.balance);
console.log(account.deposit(50000));

console.log(account.withdraw(1000));
console.log(account.transactions);

console.log(account.getBalance());


// // console.log(account.createTransaction(2000, 'deposit'));
// console.log(account.deposit(18000));
// console.log(account.deposit(18000));
// console.log(account.deposit(18000));
// // console.log(account.transactions);
// // console.log(account.withdraw(400000));
// // console.log(account.transactions);
// console.log(account.withdraw(60000));
// console.log(account.withdraw(60000));
// // console.log(account.withdraw(60000));
// console.log(account.transactions);
// console.log(account.getBalance());
// console.log(account.withdraw(60000));


// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));