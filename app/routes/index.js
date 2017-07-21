var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send(`
    <link rel="stylesheet" type="text/css"
    href="css/style.css"
    <h1>Welcome to my page </h1>
    <img src= "/images/citi.jpg" alt="baseball" style="height: 300px;">
    <p>meetup</p>
    `);
});


module.exports = router;
