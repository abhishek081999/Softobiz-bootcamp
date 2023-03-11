var express=require('express');
var bodyParser=require('body-parser');
const mysql=require('mysql');
var path=require('path');
const { copyFileSync } = require('fs');
var app=express();
var staticResourcePath=path.join( __dirname, 'public');
var staticMiddleware=express.static(staticResourcePath);
app.use(staticMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Home Controller
app.get("/",(request, response)=>{
    response.sendFile(path.join(__dirname+"/index.html"));
});

var conEnv={
    host:'localhost',
    user:'root',
    password:'password',
    database:'ecommerce'
 };

//REST API FOR orders....................................................................................................................

 app.get("/api/orders",
 (request, response)=>{
                         var con=mysql.createConnection(conEnv);
                         con.connect((err)=>{
                         if(!err){
                             var command="SELECT * from orders";
                             con.query(command,(err, rows, fields)=>{
                             if(!err){
                                 response.send(rows);
                             }
                             else{
                                 let str_err=JSON.stringify(err);
                                 console.log(str_err); 
                             }
                             });
                         } 
                         else{
                         let str_err=JSON.stringify(err);
                         console.log(str_err); 
                         }  
                         });       
})





 app.get("/api/orders/:id",
 (request, response)=>{
     var orderId=request.params.id;
     var command="SELECT * from orders WHERE id="+orderId;
     console.log(command);
     var con=mysql.createConnection(conEnv);
     con.connect((err)=>{
     if(!err){
         con.query(command,(err, rows, fields)=>{
         if(!err){
             console.log(rows);
             response.send(rows);
         }
         else{
             let str_err=JSON.stringify(err);
             console.log(str_err); 
         }
         });
     } 
     else{
         let str_err=JSON.stringify(err);
         console.log(str_err); 
     }  
     });      
}); 


 app.post("/api/orders",(request, response)=>{  
    var newOrderTobePlaced=request.body;
    let customerid=newOrderTobePlaced.customerid;
    console.log(newOrderTobePlaced);
    let command="CALL CreateOrder("+customerid+")";
    console.log(command);
    var con=mysql.createConnection(conEnv);
    con.connect((err)=>{
    if(!err){
        con.query(command,(err, result)=>{
        if(!err){
            response.send("new order  placed ");
        }
        else{
            let str_err=JSON.stringify(err);
            console.log(str_err); 
        }
        });
    } 
    else{
            let str_err=JSON.stringify(err);
            console.log(str_err); 
    }  
});   
})

app.delete("/api/orders/:id",
(request, response)=>{ 
        var orderId=request.params.id;
        var command="CALL CancelOrder="+orderId;
        console.log(command);
        var con=mysql.createConnection(conEnv);
        con.connect((err)=>{
        if(!err){
            con.query(command,(err, result)=>{
            if(!err){
                response.send(result);
            }
            else{
                let str_err=JSON.stringify(err);
                console.log(str_err); 
            }
            });
        } 
        else{
        let str_err=JSON.stringify(err);
        console.log(str_err); 
        }  
        });   
    }); 
// to be updated::::::::::
app.put("/api/orders/:orderid",
        (request, response)=>{
            var orderId=request.params.orderid; // urlparamere
            var orderTobeUpdated=request.body;

            var command="UPDATE orders SET "+
                        "orderdate ='"+orderTobeUpdated.orderdate+ "', "+
                        "customerid ="+orderTobeUpdated.customerid+              
                        " WHERE orderid ="+ orderId;

            console.log(command);
            var con=mysql.createConnection(conEnv);
            con.connect((err)=>{
            if(!err){
                con.query(command,(err, result)=>{
                if(!err){
                    response.send(result);
                }
                else{
                    let str_err=JSON.stringify(err);
                    console.log(str_err); 
                }
                });
            } 
            else{
                let str_err=JSON.stringify(err);
                console.log(str_err); 
            }  
            });    
        
        }); 


  //REST API FOR  ACCOUNTS .....................................................................................................................

  app.get("/api/accounts",
  (request, response)=>{
                          var con=mysql.createConnection(conEnv);
                          con.connect((err)=>{
                          if(!err){
                              var command="SELECT * from accounts";
                              con.query(command,(err, rows, fields)=>{
                              if(!err){
                                  response.send(rows);
                              }
                              else{
                                  let str_err=JSON.stringify(err);
                                  console.log(str_err); 
                              }
                              });
                          } 
                          else{
                          let str_err=JSON.stringify(err);
                          console.log(str_err); 
                          }  
                          });       
 })
 
 
 
 
  app.get("/api/accounts/:id",
  (request, response)=>{
      var accountId=request.params.id;
      var command="SELECT * from accounts WHERE id="+accountId;
      console.log(command);
      var con=mysql.createConnection(conEnv);
      con.connect((err)=>{
      if(!err){
          con.query(command,(err, rows, fields)=>{
          if(!err){
              console.log(rows);
              response.send(rows);
          }
          else{
              let str_err=JSON.stringify(err);
              console.log(str_err); 
          }
          });
      } 
      else{
          let str_err=JSON.stringify(err);
          console.log(str_err); 
      }  
      });      
 }); 
 
 
  app.post("/api/accounts",(request, response)=>{  
     var newAccountTobePlaced=request.body;
     let accountid=newAccountTobePlaced.accountid;
     console.log(newAccountTobePlaced);
     let command="CALL CreateAccount("+accountid+")";
     console.log(command);
     var con=mysql.createConnection(conEnv);
     con.connect((err)=>{
     if(!err){
         con.query(command,(err, result)=>{
         if(!err){
             response.send("new account created ");
         }
         else{
             let str_err=JSON.stringify(err);
             console.log(str_err); 
         }
         });
     } 
     else{
             let str_err=JSON.stringify(err);
             console.log(str_err); 
     }  
 });   
 })
 
 app.delete("/api/accounts/:id",(request, response)=>{
     
     var deleteAccount=request.body;
     let accountid=deleteAccount.accountid;
     console.log(CancelOrder);
     let command="CALL AccountDelete("+accountid+")";
     console.log(command);
     var con=mysql.createConnection(conEnv);
     con.connect((err)=>{
     if(!err){
         con.query(command,(err, result)=>{
         if(!err){
             response.send("one account deleted ");
         }
         else{
             let str_err=JSON.stringify(err);
             console.log(str_err); 
         }
         });
     } 
     else{
             let str_err=JSON.stringify(err);
             console.log(str_err); 
     }  
 });   
 
 })
 // to be updated::::::
 app.put("/api/accounts/:id",
         (request, response)=>{
             var accountId=request.params.id; // urlparamere
             var accountTobeUpdated=request.body;
 
             var command="UPDATE orders SET "+
                         "balance ="+accountTobeUpdated.balance+           
                         " WHERE accountid ="+ accountId;
 
             console.log(command);
             var con=mysql.createConnection(conEnv);
             con.connect((err)=>{
             if(!err){
                 con.query(command,(err, result)=>{
                 if(!err){
                     response.send(result);
                 }
                 else{
                     let str_err=JSON.stringify(err);
                     console.log(str_err); 
                 }
                 });
             } 
             else{
                 let str_err=JSON.stringify(err);
                 console.log(str_err); 
             }  
             });    
         
         }); 

  

//REST API FOR  LEDGER.........................................................................................................

app.get("/api/ledger",
 (request, response)=>{
                         var con=mysql.createConnection(conEnv);
                         con.connect((err)=>{
                         if(!err){
                             var command="SELECT * from ledger";
                             con.query(command,(err, rows, fields)=>{
                             if(!err){
                                 response.send(rows);
                             }
                             else{
                                 let str_err=JSON.stringify(err);
                                 console.log(str_err); 
                             }
                             });
                         } 
                         else{
                         let str_err=JSON.stringify(err);
                         console.log(str_err); 
                         }  
                         });       
})





 app.get("/api/ledger/:id",
 (request, response)=>{
     var transactionId=request.params.id;
     var command="SELECT * from ledger WHERE id="+transactionId;
     console.log(command);
     var con=mysql.createConnection(conEnv);
     con.connect((err)=>{
     if(!err){
         con.query(command,(err, rows, fields)=>{
         if(!err){
             console.log(rows);
             response.send(rows);
         }
         else{
             let str_err=JSON.stringify(err);
             console.log(str_err); 
         }
         });
     } 
     else{
         let str_err=JSON.stringify(err);
         console.log(str_err); 
     }  
     });      
}); 






//payments REST API............................................................................................................

        app.get("/api/payments",
 (request, response)=>{
                         var con=mysql.createConnection(conEnv);
                         con.connect((err)=>{
                         if(!err){
                             var command="SELECT * from payments";
                             con.query(command,(err, rows, fields)=>{
                             if(!err){
                                 response.send(rows);
                             }
                             else{
                                 let str_err=JSON.stringify(err);
                                 console.log(str_err); 
                             }
                             });
                         } 
                         else{
                         let str_err=JSON.stringify(err);
                         console.log(str_err); 
                         }  
                         });       
})





 app.get("/api/payments/:id",
 (request, response)=>{
     var paymentId=request.params.id;
     var command="SELECT * from payments WHERE id="+paymentId;
     console.log(command);
     var con=mysql.createConnection(conEnv);
     con.connect((err)=>{
     if(!err){
         con.query(command,(err, rows, fields)=>{
         if(!err){
             console.log(rows);
             response.send(rows);
         }
         else{
             let str_err=JSON.stringify(err);
             console.log(str_err); 
         }
         });
     } 
     else{
         let str_err=JSON.stringify(err);
         console.log(str_err); 
     }  
     });      
}); 


 app.post("/api/payments",(request, response)=>{  
    var newPaymentTobePlaced=request.body;
    let orderid=newPaymentTobePlaced.orderid;
    console.log(newPaymentTobePlaced);
    let command="CALL PaymentAdd("+orderid+")";
    console.log(command);
    var con=mysql.createConnection(conEnv);
    con.connect((err)=>{
    if(!err){
        con.query(command,(err, result)=>{
        if(!err){
            response.send("new payment  ");
        }
        else{
            let str_err=JSON.stringify(err);
            console.log(str_err); 
        }
        });
    } 
    else{
            let str_err=JSON.stringify(err);
            console.log(str_err); 
    }  
});   
})
// to be deleted:::::::::::::::::::::::::::::::::::::::::::!!!!!!!!!!!!!!!!!!!
app.delete("/api/payments/:id",(request, response)=>{
    
    var CancelPayment=request.body;
    let paymentid=CancelPayment.paymentid;
    console.log(CancelPayment);
    let command="CALL CancelPayment("+paymentid+")";
    console.log(command);
    var con=mysql.createConnection(conEnv);
    con.connect((err)=>{
    if(!err){
        con.query(command,(err, result)=>{
        if(!err){
            response.send("payment Cancled ");
        }
        else{
            let str_err=JSON.stringify(err);
            console.log(str_err); 
        }
        });
    } 
    else{
            let str_err=JSON.stringify(err);
            console.log(str_err); 
    }  
});   

})


//to be updated:::::::
app.put("/api/payments/:paymentid",
        (request, response)=>{
            var paymentId=request.params.id; // urlparamere
            var paymentTobeUpdated=request.body;

            var command="UPDATE orders SET "+
                        "paymentdate ='"+paymentTobeUpdated.paymentdate+ "', "+
                        "orderid ='"+paymentTobeUpdated.orderid+ "', "+
                        "amount ='"+paymentTobeUpdated.amount+ "', "+
                        "paymentmode ='"+paymentTobeUpdated.paymentmode+ "', "+
                        "transactionid ="+paymentTobeUpdated.transactionid+              
                        " WHERE paymentid ="+ paymentId;

            console.log(command);
            var con=mysql.createConnection(conEnv);
            con.connect((err)=>{
            if(!err){
                con.query(command,(err, result)=>{
                if(!err){
                    response.send(result);
                }
                else{
                    let str_err=JSON.stringify(err);
                    console.log(str_err); 
                }
                });
            } 
            else{
                let str_err=JSON.stringify(err);
                console.log(str_err); 
            }  
            });    
        
        }); 








app.listen(7777);
console.log("Express server is listening on port7777");




