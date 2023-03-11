var fileManager=require('./io');
var acct=require("./account");

var accoutHolder1={'accoutid':5654,'firstname':'Ravi', 
                    'lastname':'Tambade','contactnumber':'9881735801',
                    'email':'ravi.tambade@hotmail.com'};

var accoutHolder2={'accoutid':5657,'firstname':'Sachin','lastname':'Sharma',
        'contactnumber':'9881735761','email':'sachin.sharma@hotmail.com'
    }
var accounts=[];
accounts.push(accoutHolder1);
accounts.push(accoutHolder2);
var fileName="ledger.json";
 
fileManager.serialize(fileName,accounts);

fileManager.deserialize(fileName,accounts);