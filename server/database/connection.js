//bring mongoose into project
var mongoose = require('mongoose');

//build the connection string
//port 27017 is mongoose default port
var url = 'mongodb://localhost:27017/recipechecklist';

//create the database connection
mongoose.connect(url);

//log once database is connected
mongoose.connection.on('connected', function(){
	console.log('mongoose connected to ', url);
});

//log error if error
mongoose.connection.on('error', function(err){
	console.log('mongoose connection error: ',err);
});

//catch when the Node process is ending and close the Mongoose connection.
process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('mongoose disonnected through App termination');
		process.exit(0);
	});
});

var connection = mongoose.connection;
//export database connection for use in server
module.exports.connection = connection;