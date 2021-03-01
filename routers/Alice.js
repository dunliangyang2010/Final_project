var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send('Alice\'s home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About Alice </h1>'+
    '\n <img src="https://static.wikia.nocookie.net/disney/images/7/75/Profile_-_Alice.jpeg" height="60%">'
    );
});

module.exports = router;
