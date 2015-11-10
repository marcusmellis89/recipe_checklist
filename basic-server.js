var express= require('express');
var app = express();
var bodyParser = require('body-parser');

// app.get('/', function (req, res) {
//   res.send('')
// })
app.use(bodyParser.json());
app.use(express.static(__dirname));


var port = 8000; 
app.listen(port);
console.log('Listening...')

