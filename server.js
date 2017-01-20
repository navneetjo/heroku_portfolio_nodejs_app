/*
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/


/*
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(request, response) {
	app.use(express.static(__dirname + '/public'))
response.sendFile(path.join(__dirname + '/index.html'));  
})



app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

*/

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));



app.listen(process.env.PORT || 3000);
console.log("Express server listening on port 3000");