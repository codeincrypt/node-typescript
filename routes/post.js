"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const posts = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ message: "please enter valid api endpoint" });
});
router.get('/post', (req, res, next) => {
    res.status(200).json({ post: posts });
});
exports.default = router;
