'use strict';

require('dotenv').config();
const server = require('./src/server.js');

// start server
server.listen(3000);