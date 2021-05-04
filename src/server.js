  
'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger=require('./middleware/logger');


const clothes=require('./routes/clothes');
const food=require('./routes/food');

app.use(express.json())
app.use(logger);
app.use(clothes);
app.use(food);



app.use('*', notFoundHandler);
app.use(errorHandler);

function listen(port) {
    app.listen(port, ()=>console.log(`runing on port ${port}`) )
}

module.exports = {
    app,
    listen
}