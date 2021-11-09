const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const router = express.Router();

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

console.log("---Starting Server---");

app.use(bodyParser.urlencoded({ extended: false })); //to parse the request
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const reqBody = req.body;
    console.log("-->Request", { url, method, reqBody });
    next();
 });

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,"views","404.html"));
});

app.listen(3000);
