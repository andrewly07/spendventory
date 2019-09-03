const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../.env') });
const jsonServer = require('json-server');

const dbPath = path.resolve(__dirname, '../database/db.json');
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const endpoints = jsonServer.router(dbPath);

const data = require(dbPath);
const db = endpoints.db;

setInterval(() => {
  fs.writeFile(dbPath, JSON.stringify(data, null, 2), () => {
    db.read();
  });
}, 1000 * 60 * 60 * 24);

server.use(middleware);
server.use('/api', endpoints);
server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server listening on port', process.env.PORT);
});
