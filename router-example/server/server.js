const express = require('express');
const app = express();
const path = require('path');

// serve frontend files (all existing files in the client folder will respond)
app.use(express.static( '../client/'));
// also catch all other get requests except for /rest/*
// and send them to our index.html file
// because that is how we get virtual routes in the front-end (and front-end 404's)
// use a little regex for that (not match rest)
app.get(/^((?!rest).)*$/, async(req, res)=>{
  res.sendFile(path.normalize(__dirname + '/../client/index.html'));
});

// start the express HTTP server
app.listen('3000', ()=>{
  console.log('The magazine store server is running on port 3000');
});
