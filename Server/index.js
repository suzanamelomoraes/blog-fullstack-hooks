const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route/blog');
const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server listening`, port);
});
