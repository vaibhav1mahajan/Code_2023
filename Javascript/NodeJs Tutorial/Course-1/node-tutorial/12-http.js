const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("Welcome to our home page");
    }
    if(req.url=== '/about'){
        res.end("Let's know about us!!!!")
    } else{
        res.end(`
    <a href="/">Go to home page</a>
    `)
    }

    
})

server.listen(5000);