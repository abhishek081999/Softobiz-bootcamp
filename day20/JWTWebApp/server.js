const express=require('express');
const jwt=require('jsonwebtoken');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
let jwtSecretKey="transflower_secret";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Authentication
app.post("/api/authenticate",(request, response)=>{
    //validate user
    let credential=request.body;
    if(credential.email === "ravi.tambade@transflower.in"
       && 
       credential.password==="seed")
       {
           let data={
            time:Date(),
            user:credential.email
        };
        const token=jwt.sign(data,jwtSecretKey );
        response.send(token);
        }
});

//Authorization
app.get("/api/orders",(request, response)=>{
    let jwtHeaderKey="Authorization";
    const token=request.header(jwtHeaderKey);
    console.log(token);
    let verified = jwt.verify(token, jwtSecretKey);   
    console.log(verified);
    console.log("extracted User :" +verified.user);
    if(verified.user=== "ravi.tambade@transflower.in"){
        let myOrders=[
            {orderid:73, date:"21/5/2022",total:7800, status:"processed"},
            {orderid:74, date:"21/5/2022",total:7600,status:"shipped"},
            {orderid:75, date:"22/5/2022",total:700, status:"delivered"},
            {orderid:75, date:"22/5/2022",total:8700, status:"cancelled"},
            {orderid:75, date:"23/5/2022",total:900, status:"rejected"},
        ];
        response.status(200).send(myOrders);
    }
    else{
        return response.status(401).send(error);
    }

})
let PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});
