//importing dependencies
const express = require('express');
const router = express.Router();
var path = require('path');

// routing the app
router.get('/', (req, res) => {
 // res.end('hello world - I am the home page');
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/about', (req, res) => {
  // res.end('hello world - I am the about page');
  res.sendFile(path.join(__dirname, '../views/about.html'));
});

router.get('/contact', (req, res) => {
  // res.end('hello world - I am the contact page');
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;
