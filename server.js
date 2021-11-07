const http = require('http')      //import the http module

function reqListener(req, res) {
    
}

const server=http.createServer((req, res) => {      //storing the returned server object
    // console.log(req)
    console.log(req.url, req.method, req.headers)
});

server.listen(3000);  //to start listening at the given port
