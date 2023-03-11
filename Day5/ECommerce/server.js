//Ecommerce Server
//What do you mean by server
//Centralized Application
// continously waiting for incomming requests from client application
//capable of processing incomming requests from client application
//Generating and sending response back to client application
var http=require('http');
var fs=require('fs');

var server =http.createServer((request, response)=>{  
    
                                var pathName=request.url;
                                var fileName=pathName.substring(1);
                                console.log(pathName);
                                //  not allowed :alert("Here is me: Ravi Tambade.....");
                                console.log("Notification : Request is received from Enduser.....");
                                if(fileName=="apidata")
                                {
                                    fs.readFile("products.json",
                                                (err, data)=>{
                                                                var message=data;
                                                                response.write(message);
                                                                response.end()
                                                            });
                                }
                                 
                                else{
                                    fs.readFile(fileName,(err, data)=>{
                                                                        if(err){
                                                                            console.log("some thing has gone wrong....");    
                                                                        }
                                                                        else{
                                                                            response.write(data);
                                                                            response.end();
                                                                        }
                                    })
                                }
            });
server.listen(9090);
console.log("server is listening on port 9090");