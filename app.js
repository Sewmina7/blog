const express = require("express");
const bodyParser = require("body-parser");
const e = require("express");

const app = express();

const titles = [];
const posts = [];

let errors = [];
let success = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
let options = {
  titles: titles,
  posts: posts,
  errors: errors,
  success: success,
  compose: "0",
};
app.get("/", function (req, res) {
  res.render("home", options);

  //success = [];
  // errors = [];
});

app.post("/compose", function (req, res) {
  res.render("home", {
    titles: titles,
    posts: posts,
    errors: errors,
    success: success,
    compose: "1",
  });
  //success = [];
  // errors = [];
});

app.post("/composed", function (req, res) {
  console.log(req.body);
  if (req.body.button === "composed") {
    titles.push(req.body.title);
    posts.push(req.body.post);
    // success.push("New Blog post created successfully");
  } else {
    //  errors.push("Blog post compose cancelled !");
  }
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server is listening on port 3000 or " + process.env.PORT);
});
