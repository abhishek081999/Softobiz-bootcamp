const mysql=require('mysql');



var conEnv={

            host:'localhost',

            user:'root',

            port:3606,

            password:'root',

            database:'ecommerce'

};



var con=mysql.createConnection(conEnv);



con.connect((err)=>{

 if(!err){

     console.log("MySQL DB connection successfull");

     var command="SELECT * from products";

     con.query(command,(err, rows, fields)=>{

        if(!err){

            let str_rows=JSON.stringify(rows);

            console.log(str_rows);

        }

        else{

            let str_err=JSON.stringify(err);

            console.log(str_err);

        }

     });

 }

 else{

        console.log("MySQL DB connection failed");

 }  

});