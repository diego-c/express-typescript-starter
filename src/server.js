"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path_1 = require("path");
const routes_1 = require("./routes/routes");
const app = express(), port = process.env.PORT || 4000;
// view engine
app.set('view engine', 'ejs');
// views folder
app.set('views', path_1.join(__dirname, 'views'));
// assets folder
app.use(express.static(path_1.join(__dirname, 'public')));
// routes
app.use(routes_1.default);
// listen for requests
app.listen(port, () => console.log(`Serving your application on port ${port}`));
