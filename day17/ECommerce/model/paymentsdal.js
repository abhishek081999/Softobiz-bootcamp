

var sql = require('./db');

var Payments=function(){
  
};

//C Operation code




Payments.getPaymentsById = function (paymentId, result) {
    sql.query("Select * from payments where id = ? ", 
               paymentId, function (err, res) {             
                                                if(err) {
                                                    console.log("error: ", err);
                                                    result(err, null);
                                                }
                                                else{
                                                    result(null, res);     
                                                }
        });   
};


Payments.getAllPayments = function (result) {
    sql.query("Select * from payments", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('payments : ', res);  
              result(null, res);
            }
        });   
};






module.exports= Payments;