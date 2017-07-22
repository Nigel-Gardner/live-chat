var express = require('express');
var router = express.Router();



router.get('/speakers', function(req, res){
  var info = " ";
  var dataFile = req.app.get('appData');
  dataFile.speakers.forEach(function(item){
    info += `
    <li>
      <h2>${item.name}</h2>
      <link rel="stylesheet" type="text/css" href="css/style.css"
      <h1>Welcome</h1>
      <img src= "./images/citi.jpg" alt="baseball" style="height: 300px;">
      <p>${item.summary}</p>
    </li>
    <script src="/reload/reload.js"></script>
    `;
  });
  res.send(`
    <h1>Hello</h1>
    ${info}
    `);
});

router.get('/speakers/:speakerid', function(req, res){
  //get method
  var dataFile = req.app.get('appData');
  var speaker = dataFile.speakers[req.params.speakerid];

  //params objoect, any variables we pass....notice thats in an array --> 3000/speakers/[#]
  res.send(`
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <link rel="stylesheet" type="text/css" href="css/style.css"
    <h1>Welcome</h1>
    <img src= "./images/citi.jpg" alt="baseball" style="height: 300px;">
    <p>${speaker.summary}</p>
    <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;
