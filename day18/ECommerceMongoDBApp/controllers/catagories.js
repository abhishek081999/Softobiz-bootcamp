var express=require('express');
var apiRouter=express.Router();
var catagory=require('../model/catagory');

apiRouter.get("/", function(req, res){
    var onSuccess=function(err, data){
        if(err){
            console.log("error occured!");
        }
        res.send(data);
    }
    catagory.find(onSuccess);
});

apiRouter.get("/:id",function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var query={productID:req.params.id};
    catagory.findOne(query, onSuccess);
});

apiRouter.post("/", function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var newProduct=req.body;
    catagory.create(newProduct,onSuccess);
});

apiRouter.put("/:id", function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var query={productID:req.params.id};
    var newProduct=req.body;
    catagory.findOneAndUpdate(query, newProduct, onSuccess);
});

apiRouter.delete("/:id",function(req,res){
    var onSuccess= function(err, data){
        if(err){ console.log("error occured !");}
        res.send(data);
    }
    var query={productID:req.params.id};
    catagory.findOneAndRemove(query, onSuccess);
});


db.getCollection('catagories').aggregate([{
    $lookup:
    {
            from:"products",
            localField:"catagory",
            foreignField:"_id",
            as:"allfollow"
    }
}]).toArray(())



module.exports= apiRouter;