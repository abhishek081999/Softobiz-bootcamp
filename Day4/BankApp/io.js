//File IO code: reading from file, writing to file
var fs=require('fs');
var fileName="ledger.json";
//JSON object holds data in the form of Key value pair
//store objects into file
var accounts=[];

exports.serialize=(filename, collection)=>{
    var data=JSON.stringify(collection);
    fs.writeFile(fileName,data,
                ()=>{
                    console.log("file content written successfully")
                });
};

//restore objects from file
exports.deserialize=(fileName)=>{
    fs.readFile(fileName,(err,data)=>{
        var strData=data.toString();
        accounts=JSON.parse(strData);
        console.log(accounts); 
    })
}