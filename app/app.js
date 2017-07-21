var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
//will give routes access to the JSON file

app.use(express.static('app/public'))
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));




var server = app.listen(app.get('port'), function(){
  console.log('listen' + app.get('port'));
});
