const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const titles = [];
const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
let options = {
  title: "Day 1",
  compose: "0",
};
app.get("/", function (req, res) {
  res.render("home", options);
});

app.post("/compose", function (req, res) {
  res.render("home", {
    title: "Day 1",
    compose: "1",
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server is listening on port 3000 or " + process.env.PORT);
});
