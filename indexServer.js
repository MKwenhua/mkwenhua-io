const express = require('express');
const {
  ProccessInfo,
  ProcessHealth
} = require('./system_health')
const {
  OrangutanPage
} = require('./static')

const {
  IndexRoute,
  ProjectRoute
} = require('./react_pages.js')

const ProceessPort = process.env.NODE_PORT || 8080;
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
