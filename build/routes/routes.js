"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    let data = {
        project: 'myProject',
        inDev: true
    };
    res.render('index', data);
});
// 404
router.all('*', (req, res) => {
    res.render('404');
});
// ship routes
exports.default = router;
