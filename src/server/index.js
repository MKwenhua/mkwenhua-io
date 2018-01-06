import express from 'express';
import {
  ProccessInfo,
  ProcessHealth
} from './system_health'
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

app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);


app.listen(process.env.NODE_PORT || 8443, process.env.NODE_IP || 'localhost', () => {
  console.log(`Application worker ${process.pid} at  started...`);
});
