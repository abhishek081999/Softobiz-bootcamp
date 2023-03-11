var express= require('express');
var path=require('path');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

// var productService=require("./controllers/productservice");
var catagories=require("./controllers/catagories");
const { db } = require('./model/catagory');
// Configure mongoose driver  with 
//Asynchronous communication using 
//promise notification
mongoose.Promise=global.Promise;
var connectionString="mongodb://localhost/ECommerce";
mongoose.connect(connectionString)
        .then(()=>console.log("Mongo DB connection successfull"))
        .catch((err)=>console.log(err));





// set  express module for rest api 
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 app.use('/api/products',productService);
app.use('/api/catagory',catagories)
app.listen(7000);
console.log("Server is listening on port on 7000");
