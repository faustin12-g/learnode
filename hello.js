import  http  from "node:http";

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello, node.js!\n')
})


server.listen(3000, ()=>{
    console.log('Server running at http:3000')
})