var acct=require("./account");

console.log("Welcome to HDFC Bank");

var acct123=new acct.account(70000);   // instance
var acct765=new acct.account(90000);   // instance

console.log("First Instance");
console.log("Current Balance= "+ acct123.getBalance());
acct123.credit(67000);
acct123.debit(6000);
console.log("current Balance=" + acct123.getBalance());


console.log( "Second Instance")

console.log("Current Balance= "+ acct765.getBalance());
acct765.credit(67000);
acct765.debit(6000);
console.log("current Balance=" + acct765.getBalance());