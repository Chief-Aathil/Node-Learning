const express = require("express");
const bodyParser = require("body-parser");

const app = express();

console.log("---Starting Server---");

app.use(bodyParser.urlencoded());  //to parse the request

// '/' matched any url starting with '/'
app.use("/", (req, res, next) => {
  console.log("This middleware is always executed");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In first middleware");
  console.log("url:", req.url);
    res.send("<form action='/product' method='POST'>"+
        "<input type='text' name='title'>"+
        "<button type='submit'>Add Product"+
        "</button ></input ></form > ");
});

app.post("/product", (req, res, next) => {
    console.log(req.body);  //will be available as a key-value pair
    res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3000);
