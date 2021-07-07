'use strict';

require('dotenv').config();

const server = require('./src/server');
const pool = require('./src/pool');
const PORT = process.env.PORT || 5000;

pool
  .connect()
  .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error('OPS Error!', e.message);
  });