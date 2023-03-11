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
//list all cart
app.get("/api/cart/",(request, response)=>{ 
    var path="./data/cart.json";
    //handle exception handling in Javascript
    try {
            fs.readFile(path,(err,data)=>{
                var carts=JSON.parse(data);
                response.status(200).send(carts);
        })  
    } 
    catch (e) {
        console.log(e);
        response.status(400).send('Bad Request');  
    }
}); 

//get product details using url parameter
app.get("/api/cart/:id",(request, response)=>{
    var cartId=request.params.id;
    var path="./data/cart.json";
     fs.readFile(path,(err,data)=>{
         var carts=JSON.parse(data);
         var foundcart=carts.filter(cart=>cart.id==cartId);
        if(foundcart.length!=0){
         response.send(foundcart);
        }
        else{
         response.status(400).send('Bad Request');  
        }
     })  
 }); 

 //add to cart
app.post("/api/cart/addToCart",(request, response)=>{ 
    var newcart=request.body;
    var path="./data/cart.json";
    fs.readFile(path,(err,data)=>
    {
        var carts=JSON.parse(data);
        carts.push(newcart);
        var str_carts=JSON.stringify(carts);
        fs.writeFile(path,str_carts,(err, data)=>
                                        {
                                            response.send(carts);
                                        });
    });
}); 

//remove existing product in cart
app.delete("/api/cart/removeFromCart/:id",(request, response)=>{
    var cartId=request.params.id;
    var path="./data/cart.json";
     fs.readFile(path,(err,data)=>{
         var carts=JSON.parse(data);
         var filteredcarts=carts.filter(cart=>cart.id !=cartId);
         carts=filteredcarts;
         var str_carts=JSON.stringify(carts);
         fs.writeFile(path,str_carts,(err, data)=>
                                         {
                                         console.log("products.json file is updates with new products details");
                                         response.send(carts);
                                         });
     })  
 }); 

 //update existing product
app.put("/api/cart/updateCart/:id",(request, response)=>{
    var cartId=request.params.id; // urlparamere
    var cartTobeUpdated=request.body;
    var path="./data/cart.json";
    fs.readFile(path,(err,data)=>{
        var carts=JSON.parse(data);
        var foundcarts=carts.filter(cart=>cart.id!=cartId);
        foundcarts.push(cartTobeUpdated)
        var str_carts=JSON.stringify(foundcarts);
        fs.writeFile(path,str_carts,(err, data)=>
                                        {
                                            response.send(carts);
                                        });
    });
}); 
app.listen(1111);
console.log("cart api is listening on port 1111");