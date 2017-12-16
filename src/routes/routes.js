"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res, next) => {
    let data = {
        project: 'myProject',
        inDev: true
    };
    res.render('index', data);
    next();
});
// 404
router.all('*', (req, res, next) => {
    res.render('404');
    next();
});
// ship routes
exports.default = router;
