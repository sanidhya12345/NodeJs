const http=require('http');

const server=http.createServer((request,response)=>{
    response.setHeader('content-type','text/plain');
    if(request.url=='/'){
        response.statusCode=200;
        response.write('Hello from server side');
    }
    else if(request.url=='/sanidhya'){
        response.statusCode=300;
        response.write('Hello from sanidhya side');
    }
    response.end();
})
server.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
})