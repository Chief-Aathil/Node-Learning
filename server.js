const express = require("express");

const app = express();

console.log("---Starting Server---");

// '/' matched any url starting with '/'
app.use('/', (req, res, next) => {
    console.log("This middleware is always executed");
    next();
 });

app.use('/add-product', (req, res, next) => {
    console.log("In first middleware");
    console.log('url:', req.url)
    res.send('<h1>Add products page.</h1>')
});

app.use('/',(req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from express!</h1>')
});



app.listen(3000)