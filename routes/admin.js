const express = require("express");

const router = express.Router();


//get() uses exact match.
//  /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("In first middleware");
  console.log("url:", req.url);
  res.send(
    "<form action='/admin/add-product' method='POST'>" +
      "<input type='text' name='title'>" +
      "<button type='submit'>Add Product" +
      "</button ></input ></form > "
  );
});


// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body); //will be available as a key-value pair
  res.redirect("/");
});

module.exports = router;