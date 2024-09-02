var express = require("express");
var app = express();
app.get("/", function (req, res) { return res.send("Express on Vercel alo"); });
module.exports = app;
