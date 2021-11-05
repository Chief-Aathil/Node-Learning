const http = require('http')      //import the http module

function reqListener(req, res) {
    
}

http.createServer(reqListener); //reqListener will be executed for every incoming request
