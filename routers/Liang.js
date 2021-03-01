let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'This isLiang\'s home page'+'<br>'+
    '<a href="/user/Liang/about"> about </a>'+'<br>'+
    '<a href="/user/Liang/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About Liang </h1>'+
    '<h2> 拍謝! 小弟城武啦 </h2>'+
    '\n <img src="https://i.imgur.com/uReH10K.jpg" height="60%">'
    );
});

module.exports = router;
