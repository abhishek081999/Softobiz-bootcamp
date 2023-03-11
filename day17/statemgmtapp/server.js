var  express=require('express');
var path =require ('path');// unnecessary
var session=require('express-session');
const req = require('express/lib/request');//unnecessary

const app=express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));



app.get ("/api/products", (request, response)=>{
    if(request.session.visits){
        request.session.visits++;
        console.log("incomming request....");
        response.send("<h2> Catalog Page visited times:"+ request.session.visits +"</h2>") ;
        response.end();
    }
    else{
        console.log("first time get for hello....");
        request.session.visits=1;
        response.send("<h2> Catalog Page visisted. visited times:"+ request.session.visits +"</h2>") ;
        response.end();
    }    
});

app.get ("/api/addtocart", (request, response)=>{
    
    if(request.session.cartitems){
        request.session.cartitems++;
        console.log("incomming request....");
        response.send("<h2> Shopping cart Items::"+ request.session.cartitems +"</h2>") ;
        response.end();
    }
    else{
        if(request.session.cartitems ==undefined){
            request.session.cartitems=1;
            response.send("<h2> Shopping cart Items: "+ request.session.cartitems +"</h2>") ;
            response.end();
        }
    }    
});



app.get ("/api/removefromcart", (request, response)=>{
    
    if(request.session.cartitems){
        request.session.cartitems--;
        console.log("incomming request....");
        response.send("<h2> Shopping cart Items::"+ request.session.cartitems +"</h2>") ;
        response.end();
    }
    else{
        if(request.session.cartitems ==undefined){
            request.session.cartitems=1;
            response.send("<h2> Shopping cart Items: "+ request.session.cartitems +"</h2>") ;
            response.end();
        }
    }    
});


app.listen(9000);
console.log( "HTTP server is listening on port 9000");