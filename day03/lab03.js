class Transaction {
    constructor(accountNumber, amount, type) {
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.type = type;
        this.date = new Date().toUTCString();
    }
    toString() {
        return `Account: ${this.accountNumber}, ${this.type} for ₹${this.amount} on ${this.date}`;
    }

}

class Account {
    constructor(initialBalance) {
        if(initialBalance < 10000) {
            throw new Error("Minimum balance is 10000");
        }
        this.accountNumber = Math.round(Math.random() * 100000);
        this.balance = initialBalance;
        this.transactions = [];
        this.withdrawCount = 0;
    }

    deposit(amount) {
        this.balance += amount;
        this.transactions.push(new Transaction(this.accountNumber, amount, "Deposit"));
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient balance")
        }
        this.balance -= amount;
        this.transactions.push(new Transaction(this.accountNumber, amount, "Withdraw"));
        this.withdrawCount += 1;
        if(this.withdrawCount > 3) {
            let fee = amount * 0.005;
            this.balance -= fee;    
            this.transactions.push(new Transaction(this.accountNumber, fee, "Fee"));
        }
    }

    printStatement() {
        for(let i=0; i < this.transactions.length; i++) {
            console.log(this.transactions[i].toString());
        }
    }
}

let account = new Account(20000);
account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.printStatement();
console.log(`Balance: ${account.balance}`);

try {
    account.withdraw(98798798798);    
} catch (error) {
    console.log("Error", error.message);    
}


