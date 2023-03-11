var express=require('express');
var apiRouter=express.Router();
var Product=require('../model/product');

apiRouter.get("/", function(req, res){
    var onSuccess=function(err, data){
        if(err){
            console.log("error occured!");
        }
        res.send(data);
    }
    Product.find(onSuccess);
});

apiRouter.get("/:id",function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var query={productID:req.params.id};
    Product.findOne(query, onSuccess);
});

apiRouter.post("/", function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var newProduct=req.body;
    Product.create(newProduct,onSuccess);
});

apiRouter.put("/:id", function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var query={productID:req.params.id};
    var newProduct=req.body;
    Product.findOneAndUpdate(query, newProduct, onSuccess);
});

apiRouter.delete("/:id",function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var query={productID:req.params.id};
    Product.findOneAndRemove(query, onSuccess);
});
module.exports= apiRouter;