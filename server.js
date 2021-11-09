const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

console.log("---Starting Server---");

app.use(bodyParser.urlencoded({ extended: false })); //to parse the request
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    console.log("-->Request", { url, method });
    next();
 });

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    console.log(req.body);
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});

app.listen(3000);
