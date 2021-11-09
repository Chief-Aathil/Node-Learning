const http = require('http');     //import the http module

const express = require('express')

const app = express();

console.log('---Starting Server---');
const server = http.createServer(app);

server.listen(3000);  //to start listening at the given port
