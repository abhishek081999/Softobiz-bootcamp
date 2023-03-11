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


 //get all customers
app.get("/api/customers",
        (request, response)=>{
                                var con=mysql.createConnection(conEnv);
                                con.connect((err)=>{
                                if(!err){
                                    var command="SELECT * from customers";
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


//get customers details  whose id matches
app.get("/api/customers/:id",
        (request, response)=>{
            var productId=request.params.id;
            var command="SELECT * from customers WHERE id="+customerId;
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

//add new customer
app.post("/api/customers",
        (request, response)=>{ 
                    var newCustomer=request.body;
                    let command="INSERT INTO customers(id,firstName,lastname,email,contactnumber,location) VALUES("+
                    newCustomer.id+ ",'"+ newCustomer.firstName+"','"+newCustomer.lastname+"','"+
                    newCustomer.email+"','"+newCustomer.contactnumber+"','"+newCustomer.location+"')";
                    console.log(command);
                    var con=mysql.createConnection(conEnv);
                    con.connect((err)=>{
                    if(!err){
                        con.query(command,(err, result)=>{
                        if(!err){
                            response.send("new customer added ");
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

app.post("/api/orders",
         (request, response)=>{
         let neworder = request.body;
         let command="start transaction;"+"select @customerid:=7;"+"select @productid:=9;"+"select @orderid:= max(orderid) + 1 from orders;" +
         "insert into orders(orderdate,status,customerid) values('2022-05-19','inprocess',@customerid);"+
        " insert into orderdetails(orderid,productid,items) values(@orderid,@productid,78);"+
         "insert into orderdetails(orderid,productid,items) values(@orderid,@productid,59);"+
         "insert into orderdetails(orderid,productid,items) values(@orderid,@productid,40);"+
         "insert into orderdetails(orderid,productid,items) values(@orderid,@productid,90);"+
         "insert into orderdetails(orderid,productid,items) values(@orderid,@productid,30);"+
         "commit;";
         console.log(command);
         var con=mysql.createConnection(conEnv);
         con.connect((err)=>{
         if(!err){
             con.query(command,(err, result)=>{
             if(!err){
                 response.send("new customer added ");
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

//remove existing product
app.delete("/api/customers/:id",
            (request, response)=>{ 
                    var customerId=request.params.id;
                    var command="DELETE  from customers WHERE id="+customerId;
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

//update existing customer
app.put("/api/customers/:id",
        (request, response)=>{
            var customerId=request.params.id; // urlparamere
            var customerTobeUpdated=request.body;

            var command="UPDATE customers SET "+
                        "firstName ='"+customerTobeUpdated.firstName+ "', "+
                        "lastname ='"+customerTobeUpdated.lastname+ "', "+
                        "email ='"+customerTobeUpdated.email+ "', "+
                        "contactnumber ='"+customerTobeUpdated.contactnumber+ "', "+
                        "location ='"+customerTobeUpdated.location +"'"+
                        " WHERE id ="+ customerId;

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
