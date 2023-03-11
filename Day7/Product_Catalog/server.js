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
//list all products
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

//get product details using url parameter
app.get("/api/products/:id",(request, response)=>{
   var productId=request.params.id;
   var path="./data/products.json";
    fs.readFile(path,(err,data)=>{
        var products=JSON.parse(data);
        var foundProduct=products.filter(product=>product.id==productId);
       if(foundProduct.length!=0){
        response.send(foundProduct);
       }
       else{
        response.status(400).send('Bad Request');  
       }
    })  
}); 

//add new product 
app.post("/api/products",(request, response)=>{ 
    var newProduct=request.body;
    var path="./data/products.json";
    fs.readFile(path,(err,data)=>
    {
        var products=JSON.parse(data);
        products.push(newProduct);
        var str_products=JSON.stringify(products);
        fs.writeFile(path,str_products,(err, data)=>
                                        {
                                            response.send(products);
                                        });
    });
}); 

//remove existing product
app.delete("/api/products/:id",(request, response)=>{
   var productId=request.params.id;
   var path="./data/products.json";
    fs.readFile(path,(err,data)=>{
        var products=JSON.parse(data);
        var filteredProducts=products.filter(product=>product.id !=productId);
        products=filteredProducts;
        var str_products=JSON.stringify(products);
        fs.writeFile(path,str_products,(err, data)=>
                                        {
                                        console.log("products.json file is updates with new products details");
                                        response.send(products);
                                        });
    })  
}); 

//update existing product
app.put("/api/products/:id",(request, response)=>{
    var productId=request.params.id; // urlparamere
    var productTobeUpdated=request.body;
    var path="./data/products.json";
    fs.readFile(path,(err,data)=>{
        var products=JSON.parse(data);
        var foundProducts=products.filter(product=>product.id!=productId);
        foundProducts.push(productTobeUpdated)
        var str_products=JSON.stringify(foundProducts);
        fs.writeFile(path,str_products,(err, data)=>
                                        {
                                            response.send(products);
                                        });
    });
}); 

app.listen(8888);
console.log("Product catalog api is listening on port 8888");