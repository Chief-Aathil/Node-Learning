const http = require('http')      //import the http module

function reqListener(req, res) {
    
}

const server=http.createServer((req, res) => {      //storing the returned server object
    // console.log(req)
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from my Node.js server</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);  //to start listening at the given port
