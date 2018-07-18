// server.js
// where your node app starts
// this is the entry point

// here we import the built in http module
// which comes in when we install node
var http = require('http');
// modules are nothing but files containing lines of code
// these lines of code can contain functions, objects which we can re-use in our applications

const handleRequests = (req, res) => {
  res.end('Hello World');
}

var server = http.createServer(handleRequests);

server.listen(8080, () => {
  console.log('Listening on Port 8080');
});

// Why use Node ?

// What is package.json file ? Why do we need it ?

// You do not NEED package.json. However, you will most likely want it. 
// As you make larger applications using node.js, you will find that using other people's code is the 
// best solution vs. writing the same thing yourself.npm has lots of packages that people want to use over and over again. 
// package.json provides a simple way for people to keep track of packages they use in their application.

// 