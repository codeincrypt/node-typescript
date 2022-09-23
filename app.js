"use strict";
exports.__esModule = true;
var express = require("express");
var post_1 = require("./routes/post");
var app = express();
app.use(express.json());
app.use(post_1["default"]);
app.listen(3000);
