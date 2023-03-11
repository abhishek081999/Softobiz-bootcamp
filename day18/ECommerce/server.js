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
var cors=require('cors'); //cors require for running two ....server

var app=express();

var staticResourcePath=path.join( __dirname, 'public');
var staticMiddleware=express.static(staticResourcePath);
app.use(cors()); //cors moddleware
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
app.listen(7777);
console.log("Express server is listening on port7777");
