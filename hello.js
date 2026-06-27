import  http  from "node:http";
import { userInfo } from "node:os";

const server = http.createServer((req, res)=>{
    const student = {name: 'Faustin,', age: 90}
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.url==='/')
    {
        res.end(JSON.stringify(student))
    }
    else if(req.url === '/about')
    {
        res.end(JSON.stringify({
            method: req.method,
            url: req.url,
            userInfo: req.headers['user-agent']
        }))
    }
    else{
        res.end('404 Not Found')
    }
})


server.listen(3000, ()=>{
    console.log('Server running at http:3000')
})