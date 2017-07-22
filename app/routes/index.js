var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

  res.render('index');
  //rendering the views/index.ejs file

});


module.exports = router;
