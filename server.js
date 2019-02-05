'use strict';

const apiRouter = require('./api/index.js');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const server = express()
const PORT = 8080 || process.env.PORT;


// const mongoose = require('mongoose')
// mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/exercise-track' )


server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(apiRouter);

server.use('/', express.static(path.join(__dirname, './client/build')));
server.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Not found middleware
server.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})

// Error Handling middleware
server.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})
