import express from 'express';
import {
  OrangutanPage
} from './static'

import {
  IndexRoute,
  ProjectRoute
} from './react_pages'

const app = express();

app.use(express.static('public'));

app.get('/', IndexRoute);

app.get('/project/*', ProjectRoute);

app.get('/yoyo', OrangutanPage);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening http://localhost:${process.env.PORT || 3000}`);
});
