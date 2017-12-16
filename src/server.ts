import * as express from 'express';
import { join } from 'path';
import routes from './routes/routes';
const app: express.Application = express(),
port = process.env.PORT || 4000;

// view engine
app.set('view engine', 'ejs');

// views folder
app.set('views', join(__dirname, 'views'));

// assets folder
app.use(express.static(join(__dirname, 'public')));

// routes
app.use(routes);

// listen for requests
app.listen(port, () => console.log(`Serving your application on port ${port}`));