const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("This is HomePage")
        res.end()
    }
else if(req.url==='about'){
    res.write("This is AboutPage")
    res.end()
}  

})

server.listen(3003)
console.log('hello')