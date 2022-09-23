"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var posts = [];
router.get('/', function (req, res, next) {
    res.status(200).json({ message: "please enter valid api endpoint" });
});
router.get('/post', function (req, res, next) {
    res.status(200).json({ post: posts });
});
exports["default"] = router;
