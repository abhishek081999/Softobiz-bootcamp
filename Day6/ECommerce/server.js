var express=require('express');
var bodyParser=require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');
var staticFolder=express.static(path.join(__dirname,'public'));

app.use(staticFolder);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//

//var products=[{"id":1,"title":"rose","description":"Valentine Flower"}];

//3 var customer=[{"id":1,"Firstname":"rosei","description":"Vary Beautiful"}];

app.get("/",(request, response)=>{
    response.sendFile(path.join(__dirname+"./index.html"));
});
app.get("/api/products",(request, response)=>{
    var product= request.body;
    var path="./data/products.json";
    fs.readFile(path,(err,data)=>{
var products = JSON.parse(data);
response.send(products);
// get all json object from file
    })
    
});
    

app.get("/api/customer",(request, response)=>{
    //write logic for accessing data from customer.json file
    //fill it inside array custommers
    //send customers dat as response
    var customer= request.body;
    var path="./data/customers.json";
    fs.readFile(path,(err,data)=>{
var customers = JSON.parse(data);
response.send(customers);
// get all json object from file
    })
    
});
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
app.post("/api/login",(request,response)=>{
var incommingData = request.body;
console.log(incommingData);
console.log("validating user login at server... ");
if(incommingData.email==="ravi.tambede@transflower.in"
&&
incommingData.password==="seed")
{

    var userToken={
        "uniqueId":7777,
        "source":"Ecommerce"
    }
    response.send(userToken);
}
else {
    response.send("Invalid user");
}
})

app.post("/api/insert",(request,response)=>{
    var product= request.body;
    var path="./data/products.json";
    fs.readFile(path,(err,data)=>{
var products = JSON.parse(data);

// get all json object from file
products.push(product);// push new 
var data = JSON.stringify(products)
fs.writeFile(path,data,(err,data)=>{
    console.log("customer .json file is updated with new ");
    response.send("new customer is added to product collection");

});
    })

});
app.listen(9090);
console.log("Server is listening at port 9090");