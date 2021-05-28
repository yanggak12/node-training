var express = require("express");
var app = express();

app.listen(9999);

app.get("/", (req, res) => {
  res.send("hello world");
});
