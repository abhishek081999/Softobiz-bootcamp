//Reusable  functions for Account management
//account is a Blue Print
var events=require('events');
var handlers=require("./handler");
var taxation=require("./taxation");

var emitter=new events.EventEmitter();

//Use Event Driven Mechanism
exports.account=function(acctid, fname, lname, contactno,email,
                        initialBalance){
    
    var balance=initialBalance;
    var accountid=acctid;
    var firstname=fname;
    var lastname=lname;
    var contactnumber=contactno;
    var emailaddress=email;
    
    var register=()=>{
        //Mapping event with event listener
        //Dynamic linking of events to its repsective event listeners   
        //event Routing
        emitter.on("underBalance",handlers.blockAccount);
        emitter.on("underBalance",handlers.sendEmail);
        emitter.on("underBalance",handlers.sendSMS);
        //for one event multiple event handlers are attached
        emitter.on("overBalance",taxation.payIncomeTax);
        emitter.on("overBalance",taxation.payProfessionalTax);
        emitter.on("overBalance",taxation.payTDSTax);
    }

    var monitor=()=>{
        //business rule
        if(balance <=1000){
            //insuffienct funds
            //strong type attaching actions
            //static linking
            //early Binding
            /*handlers.sendEmail();
            handlers.sendSMS();
            handlers.blockAccount();
           */
            //implement late binding
             // raise trigger event

             emitter.emit("underBalance");
        }
        else if(balance >=500000) 
        {
            //strong type attaching actions
            //early Binding
           /* taxation.payIncomeTax();
            taxation.payProfessionalTax();
            taxation.payTDSTax();
            taxation.payServiceTax();
            */

            //implement late binding
            //trigger event
            emitter.emit("overBalance");
        }
    };

    var withdraw=(amount)=>{
        balance-=amount;
        monitor();
    }  

    var deposit=(amount)=>{
        balance+=amount;
        monitor();
    }  
    var getBalance=()=>{
       return balance;
    }
    
    return{
        //keyword for outside to use : keyword of internal function
        credit:deposit,
        debit:withdraw,
        getBalance:getBalance,
        subscribe:register
    }
} 