//impoer modules
//create express server
//set up middleware
//map httphandlers with
// app.get, post, put, update and detele 
//listen on port
var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var path=require('path');

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


//Server Side Node js process Javascript code execution

app.get("/api/products",(request, response)=>{ 
    var path="./data/products.json";
    //How to handle exception handling in Javascript
    try {
            fs.readFile(path,(err,data)=>{
                var products=JSON.parse(data);
                response.status(200).send(products);
        })  
    } 
    catch (e) {
        console.log(e);
        response.status(400).send('Bad Request');  
    }
}); 



//Customer Controller
app.get("/api/customers",(request, response)=>{
    var path="./data/customers.json";
    fs.readFile(path,(err,data)=>{
        var customers=JSON.parse(data);
        response.send(customers);
    })
 });

 app.post("/api/login",(request, response)=>{
    var incommingData=request.body;
    var path="./data/customers.json";
    fs.readFile(path,(err,data)=>{
       
        var products=JSON.parse(data);
        
        var userlogin=(products.filter(item => (item.email == incommingData.email && item.password == incommingData.password)));
        if(userlogin.length > 0){
        response.send(userlogin);
        }else{
            response.send("invalid user");
        }
       
    })
   
 })


    
    app.post("/api/register",(request,response)=>{
        var customer= request.body;
        var path="./data/customers.json";
        fs.readFile(path,(err,data)=>{
    var customers = JSON.parse(data);
    
    // get all json object from file
    customers.push(customer);// push new 
    var data = JSON.stringify(customers)
    fs.writeFile(path,data,(err,data)=>{
        console.log("customer .json file is updtaed with new ");
        response.send("new customer isadded to customers collection");
    
    });
        })
    
    });
    
    app.listen(7777);
    console.log("Express server is listening on port7777");