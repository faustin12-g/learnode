import http from 'node:http'

const server = http.createServer((req, res)=>{
    if(req.method==='POST')
    {
        let body = '';
        req.on('data', chunk=>{body+=chunk});
        req.on('end',()=>{
            const parsed = JSON.parse(body);
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({recieved: parsed}))
        })
    }
    else{
        res.writeHead(405)
        res.end('Method not allowed')
    }
})

server.listen(3000);