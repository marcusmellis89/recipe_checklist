var express= require('express');
var db = require('./database/connection.js');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var Recipe = require('./database/models/Recipe.js');

// app.get('/', function (req, res) {
//   res.send('')
// })
app.use(bodyParser.json());
console.log(path.join(__dirname, '..'));
app.use(express.static(path.join(__dirname, '..')));

app.post('/saverecipe', function (req, res) {

	// console.log('req.body is ', req.body);

	Recipe.create(req.body.info, function(err, recipe) {

		console.log('inside recipeCreate in server at top');

        if (err) {
          console.log("app.post/error:",err);
        } else if(!err){

        console.log("no error so I guess I saved this ", recipe);
        
        res.send({ status: 201});
    	}

      });

  // res.send('')

});

app.post('/removeall', function (req, res) {

	// console.log('req.body is ', req.body);
		
	    
		Recipe.remove({}, function (err) { 
	 	if (err) {
          console.log("app.post/error:",err);
        } else if(!err){

        console.log('successful delete')
        };;
        
        res.send({ status: 201});
    	}

		);
		




  // res.send('')

});

app.get('/retrieve', function (req, res) {

	console.log('inside retrieve endpoint');

	 Recipe.find({}, function (err, docs) { 
	 	if (err) {
          console.log("app.post/error:",err);
        } else if(!err){

        console.log("successful query of database now sending back");
        
        res.send({ status: 200, data: docs});
    	}
	 });

	// console.log('result of mongoose find is ', result);
});





var port = 8000; 
app.listen(port);
console.log('Listening on server at localhost:' + port);

