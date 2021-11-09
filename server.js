const express = require("express");

const app = express();

console.log("---Starting Server---");

app.use((req, res, next) => {
    console.log("In first middleware");
    console.log('url:',req.url )
    next(); // to call the next use() in line
});

app.use((req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from express!</h1>')
});

//the below use() will not be executed as the previous one doesn't call next()
app.use((req, res, next) => {
    console.log('In yet another middleware')
});


app.listen(3000)