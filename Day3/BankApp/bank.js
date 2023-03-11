var acct=require("./account");

console.log("Welcome to Bank Application");

console.log("Current Balance= "+ acct.getBalance());
acct.deposit(5600);
acct.withdraw(600);
console.log("Current Balance=" + acct.getBalance());
