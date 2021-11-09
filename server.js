const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

console.log("---Starting Server---");

app.use(bodyParser.urlencoded({extended:false}));  //to parse the request

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
