const http = require('http');     //import the http module

const routes = require('./routes');

console.log('---Starting Server---');
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);  //to start listening at the given port
