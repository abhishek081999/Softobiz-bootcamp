var express=require('express');
var bodyParser=require('body-parser');
const mysql=require('mysql');
var path=require('path');
var cors=require('cors');
const { copyFileSync } = require('fs');
var app=express();
var staticResourcePath=path.join( __dirname, 'public');
var staticMiddleware=express.static(staticResourcePath);
app.use(staticMiddleware);
app.use(cors());
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


 //get all products
app.get("/api/products",
        (request, response)=>{
                                var con=mysql.createConnection(conEnv);
                                con.connect((err)=>{
                                if(!err){
                                    var command="SELECT * from products";
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


//get product details  whose id matches
app.get("/api/products/:id",
        (request, response)=>{
            var productId=request.params.id;
            var command="SELECT * from products WHERE id="+productId;
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

//add new product 
app.post("/api/products",
        (request, response)=>{ 
                    var newProduct=request.body;
                    let command="INSERT INTO products(id,title,description,quantity,imageurl,unitprice) VALUES("+
                                newProduct.id+ ",'"+ newProduct.title+"','"+newProduct.description+"',"+
                                newProduct.quantity+",'"+newProduct.imageurl+"',"+newProduct.unitprice+")";
                    console.log(command);
                    var con=mysql.createConnection(conEnv);
                    con.connect((err)=>{
                    if(!err){
                        con.query(command,(err, result)=>{
                        if(!err){
                            response.send("new product added ");
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

//remove existing product
app.delete("/api/products/:id",
            (request, response)=>{ 
                    var productId=request.params.id;
                    var command="DELETE  from products WHERE id="+productId;
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

//update existing product
app.put("/api/products/:id",
        (request, response)=>{
            var productId=request.params.id; // urlparamere
            var productTobeUpdated=request.body;

            var command="UPDATE products SET "+
                        "title ='"+productTobeUpdated.title+ "', "+
                        "description ='"+productTobeUpdated.description+ "', "+
                        "imageurl ='"+productTobeUpdated.imageurl+ "', "+
                        "quantity ="+productTobeUpdated.quantity+ ", "+
                        "unitprice ="+productTobeUpdated.unitprice+                 
                        " WHERE id ="+ productId;

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
