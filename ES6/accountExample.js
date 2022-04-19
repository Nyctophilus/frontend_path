class Account {
  static id = 10002;
  static IBAN = function () {
    return `GR${Account.id.toString().padStart(8, "0")}`;
  };

  constructor(name) {
    this.name = name;
    this.balance = 0;
    Account.id++;
    Account.IBAN(Account.id);
  }

  deposit(v) {
    this.balance += v;
  }
  // console.log(newAccount.balance);
  withdraw(v) {
    if (v > 0 && typeof v === "number" && v < this.balance)
      this.balance -= v;
    else console.log(`withdraw failure!`);
  }
  getBalance() {
    return this.balance;
  }
}

const newAccount = new Account("Kostas Minaidis");
// New account created for : Kostas Minaidis
// IBAN : GR00010003
console.log(Account.IBAN());
// 0 newAccount.getBalance ( )

const new2 = new Account("fay");
console.log(Account.IBAN());

// console.log(newAccount.name);

// newAccount.deposit(5500);

// // newAccount.withdraw(6000);// Error ' Insufficient balance !!
// // newAccount.withdraw(" 50 "); // Error ' Invalid amount '
// // newAccount.withdraw(-150); // Error ' Invalid amount '
// newAccount.withdraw(5000); //success

// console.log(newAccount.getBalance()); // 500
