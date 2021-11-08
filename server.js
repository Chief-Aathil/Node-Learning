const http = require('http')      //import the http module

const routes = require('./routes')


const server=http.createServer(routes);

server.listen(3000);  //to start listening at the given port
