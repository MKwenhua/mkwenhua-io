const ProceessPort = process.env.NODE_PORT || 5000;
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


app.listen(ProceessPort, () => {
  console.log(`Application worker ${process.pid} at Port: ${ProceessPort} has started`);
});
