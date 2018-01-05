import express from 'express';
const contentTypes = require('../../utils/content-types');
const sysInfo      = require('../../utils/sys-info');
const env = process.env;
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

app.get('/health', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.get(/\/info\/(gen|poll)/, (req,res) => {
    let url = req.url;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify(sysInfo[url.slice(6)]()));
});

// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server is listening http://localhost:${process.env.PORT || 3000}`);
// });

let server = app.listen(env.NODE_PORT || 8443, env.NODE_IP || 'localhost', () => {
  console.log(`Application worker ${process.pid} at  started...`);
});
