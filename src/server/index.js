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

const ProceessPort = process.env.NODE_PORT || 8443;
const ProceessIP = process.env.NODE_IP || 'localhost';

const app = express();

app.use(express.static('public'));

app.get('/', IndexRoute);

app.get('/projects', IndexRoute);

app.get('/git', IndexRoute);

app.get('/buzzwords', IndexRoute);

app.get('/project/*', ProjectRoute);

app.get('/yoyo', OrangutanPage);

app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);


app.listen(ProceessPort, ProceessIP, () => {
  console.log(`Application worker ${process.pid} at IP: ${ProceessIP} Port: ${ProceessPort} has started`);
});
