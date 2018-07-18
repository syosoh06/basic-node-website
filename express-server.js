// express is a node framework
// routing , error handling becomes much easier with express
// a lot less lines of code will be needed when creating an express app

// requiring / importing all our dependencies below
var express = require('express');
var routes = require('./app/routes');
var app = express();

app.use('/', routes);

// starting the server
app.listen(8080, () => {
  console.log('listening on 8080');
});


// npm install nodemon --save
// use nodemon whenever u are doing a node app local development

