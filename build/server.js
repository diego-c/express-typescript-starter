"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules = require("./exports/exports");
const app = modules.express(), port = process.env.PORT || 4000;
// view engine
app.set('view engine', 'ejs');
// views folder
app.set('views', modules.join(__dirname, 'views'));
// assets folder
app.use(modules.express.static(modules.join(__dirname, 'public')));
// routes
app.use(modules.routes);
// listen for requests
app.listen(port, () => console.log(`Serving your application on port ${port}`));
