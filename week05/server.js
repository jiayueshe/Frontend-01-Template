const http =require('http');
const server = http.createServer((req,res)=>{
    console.log("request received");
    //console.log(req);
    res.setHeader('Content-Type','text/html');
    res.setHeader('X-Fee','bar');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('ok');
});

server.listen(8888);