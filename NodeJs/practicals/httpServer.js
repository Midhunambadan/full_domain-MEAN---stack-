
const http=require('http')

const server=http.createServer((req,res)=>{
    res.setHeader('X-Powered-By', 'Node.js')
    res.writeHead(500,{'Content-Type': 'text/html' })
    res.write('Simple http server')
    res.end('<h1>Hello, welcome to my simple server!</h1>')
})

server.listen(4000,()=>{
    console.log('server is running on http://localhost:4000')
})
