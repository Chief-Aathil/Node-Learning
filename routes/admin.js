const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

//get() uses exact match.
//  /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body); //will be available as a key-value pair
  res.redirect("/");
});

module.exports = router;
