const http=require('http');

//For type plain text:-

const server=http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('content-type','text/plain');
    response.write('Hello from server side');
    response.end();
})
server.listen(3000,()=>console.log("Server running on port http://localhost:3000"))

//For html content type:-

const server2=http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('content-type','text/html');
    response.write('<h1> Hello Fellow Developers');
    response.end();
})
server2.listen(3000,()=>console.log("Server running on port http://localhost:3000"));