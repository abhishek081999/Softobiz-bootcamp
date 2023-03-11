//importing dependency modules
var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');

//Server Creation
var app=express();

//Middleware configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//URL Mapping
//list all customers
app.get("/api/customers",(request, response)=>{ 
    var path="./data/customers.json";
    //How to handle exception handling in Javascript
    try {
            fs.readFile(path,(err,data)=>{
                var customers=JSON.parse(data);
                response.status(200).send(customers);
        })  
    } 
    catch (e) {
        console.log(e);
        response.status(400).send('Bad Request');  
    }
}); 

//get customer details using url parameter
app.get("/api/customers/:id",(request, response)=>{
   var customerId=request.params.id;
   var path="./data/customers.json";
    fs.readFile(path,(err,data)=>{
        var customers=JSON.parse(data);
        var foundcustomer=customers.filter(customer=>customer.id==customerId);
       if(foundcustomer.length!=0){
        response.send(foundcustomer);
       }
       else{
        response.status(400).send('Bad Request');  
       }
    })  
}); 

//add new customer
app.post("/api/customers",(request, response)=>{ 
    var newcustomer=request.body;
    var path="./data/customers.json";
    fs.readFile(path,(err,data)=>
    {
        var customers=JSON.parse(data);
        customers.push(newcustomer);
        var str_customers=JSON.stringify(customers);
        fs.writeFile(path,str_customers,(err, data)=>
                                        {
                                            response.send(customers);
                                        });
    });
}); 

//remove existing customers
app.delete("/api/customers/:id",(request, response)=>{
   var customerId=request.params.id;
   var path="./data/customers.json";
    fs.readFile(path,(err,data)=>{
        var customers=JSON.parse(data);
        var filteredcustomers=customers.filter(customer=>customer.id !=customerId);
        customers=filteredcustomers;
        var str_customers=JSON.stringify(customers);
        fs.writeFile(path,str_customers,(err, data)=>
                                        {
                                        console.log("customers.json file is updates with new products details");
                                        response.send(customers);
                                        });
    })  
}); 

//update existing customers
app.put("/api/customers/:id",(request, response)=>{
    var customerId=request.params.id; // urlparamere
    var customerTobeUpdated=request.body;
    var path="./data/customers.json";
    fs.readFile(path,(err,data)=>{
        var customers=JSON.parse(data);
        var foundcustomers=customers.filter(customer=>customer.id!=customerId);
        foundcustomers.push(customerTobeUpdated)
        var str_customers=JSON.stringify(foundcustomers);
        fs.writeFile(path,str_customers,(err, data)=>
                                        {
                                            response.send(customers);
                                        });
    });
}); 

app.listen(8888);
console.log("customer api is listening on port 8888");