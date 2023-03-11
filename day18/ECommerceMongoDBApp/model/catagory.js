var mongoose=require('mongoose');
var ProductSchema=new mongoose.Schema(
    {
        category:String    
    },
    {versionKey:false});

    module.exports=mongoose.model("catagory",ProductSchema);
