const http = require('http')      //import the http module

function reqListener(req, res) {
    
}

const server=http.createServer((req, res) => {      //storing the returned server object
    // console.log(req)
    console.log(req.url, req.method, req.headers)
    const url = req.url
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" >Send</button></input></form><body>')
        res.write('</html>')
        res.end();
        return
    }
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from my Node.js server</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);  //to start listening at the given port
