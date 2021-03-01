var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send('Bob\'s home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About Bob </h1>'+
    '\n <img src="https://media.gq.com.tw/photos/5fa926a80a0bef4bfc16744c/master/w_1601,c_limit/bob-ross-vector-3.jpg" height="60%">'
    );
});

module.exports = router;
