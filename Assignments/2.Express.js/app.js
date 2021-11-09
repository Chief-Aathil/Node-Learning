const express = require("express");

const app = express();

console.log("---Starting Server---");

// '/' matched any url starting with '/'
app.use('/users', (req, res, next) => {
    console.log("First middleware");
    res.send('<h1>Users Response</h1>')

 });

app.use('/', (req, res, next) => {
    console.log("Second middleware");
    res.send('<h1>Root Response</h1>')
});


app.listen(3000)