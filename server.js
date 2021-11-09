const http = require("http"); //import the http module

const express = require("express");

const app = express();

console.log("---Starting Server---");

app.use((req, res, next) => {
    console.log("In the middleware");
    next(); // to call the next use() in line
});

app.use((req, res, next) => {
  console.log("In another middleware");
});

//the below use() will not be executed as the previous one doesn't call next()
app.use((req, res, next) => {
    console.log('In yet another middleware')
});


const server = http.createServer(app);

server.listen(3000); //to start listening at the given port
