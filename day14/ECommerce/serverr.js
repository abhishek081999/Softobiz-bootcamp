var express=require('express');
var bodyParser=require('body-parser');
const mysql=require('mysql');
var path=require('path');
var app=express();
var staticResourcePath=path.join( __dirname, 'public');
var staticMiddleware=express.static(staticResourcePath);
app.use(staticMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Home Controller
app.get("/",(request, response)=>{
    response.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/api/products",
        (request, resposne)=>{
                                var conEnv={
                                    host:'localhost',
                                    user:'root',
                                    password:'password',
                                    database:'ecommerce'
                                 };

                                var con=mysql.createConnection(conEnv);

                                con.connect((err)=>{
                                if(!err){
                                console.log("MySQL DB connection successfull");

                                } 
                                else{
                                let str_err=JSON.stringify(err);
                                console.log(str_err); 
                                }  
                                });

                                var command="SELECT * from products";
                                con.query(command,(err, rows, fields)=>{
                                if(!err){
                                    //let str_rows=JSON.stringify(rows);
                                    //console.log(str_rows);
                                    resposne.send(rows);
                                }
                                else{
                                    let str_err=JSON.stringify(err);
                                    console.log(str_err); 
                                }
                                });
})

app.delete("/api/products",(request, resposne)=>{
    var conEnv={
        host:'localhost',
        user:'root',
        password:'password',
        database:'ecommerce'
     };

    var con=mysql.createConnection(conEnv);

    con.connect((err)=>{
        if (err) throw err;
        var sql = "DELETE FROM productss WHERE title = 'rose'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
})
})




app.put("/api/products",(request, resposne)=>{
    var conEnv={
        host:'localhost',
        user:'root',
        password:'password',
        database:'ecommerce'
     };

    var con=mysql.createConnection(conEnv);

    con.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE products SET title = 'marigold' WHERE title = 'rose'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });




})

app.post("/api/products",(request, resposne)=>{
    var newproduct = req.body;
    console.log(newproduct);
    var conEnv={
        host:'localhost',
        user:'root',
        password:'password',
        database:'ecommerce'
     };

    var con=mysql.createConnection(conEnv);

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO products (id,title,description,quantity,imageurl,unitprice)VALUES('5','sunflower','oils making flower','23','sunflower.jpg','8000')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });

})



app.listen(7777);
console.log("Express server is listening on port7777");
