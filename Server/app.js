const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route/blog');
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(router);

const port = process.env.PORT || 3002;

server.listen(port, () => {
  console.log('Listening on port', port);
});
