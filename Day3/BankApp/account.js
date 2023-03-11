//Reusable  functions for Account management
//account is a Blue Print

exports.account=function(amount){
    
    var balance=amount;
    var withdraw=function(amount){
        balance-=amount;
    }   
    var deposit=function(amount){
        balance+=amount;
    }  
    var getBalance=function(){
       return balance;
    }
    return{
        //keyword for outside to use : keyword of internal function
        credit:deposit,
        debit:withdraw,
        getBalance:getBalance
    }
} 