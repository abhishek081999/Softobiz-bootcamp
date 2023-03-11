//insufficient funds  module
//Applications are responsive based on Event handling mechanism
//Callback functions
//Event handlers
//Action listeners
// Hook functions


//Best practice:
exports.blockAccount=()=>{
    var message="Your account is blocked temporarily, please contact Customer Support ..."
    console.log(message);
};

exports.sendEmail=()=>{
    var message="Insufficient funds  message has been sent to your registered email address..";
    console.log(message);
};

exports.sendSMS=()=>{
    var message="Insufficient funds  message has been sent to your registered mobile number..";
    console.log(message);
}