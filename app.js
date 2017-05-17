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

/* working fine

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));



app.listen(process.env.PORT || 5000);
console.log("Express server listening on port 5000");

*/
var pg = require('pg');
var Pool= pg.Pool;

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var config = {
  host: 'ec2-23-23-227-188.compute-1.amazonaws.com',
  user: 'iuhujmwpdfjvig',
  password: '10d034d0a8194c8df0bd0d610bfc2ed5f89751573d53e405de463306953d87ef',
  database: 'd4geimhijn4al5',
};
var pool = new Pool(config)

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// for db connection getting query related issue

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    pool.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});


app.get('/info', function (request, response) {
pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) 
	  { console.error(err); response.send("Error " + err); }
  console.log('Connected to postgres! Getting schemas...');
	console.log("Client info:",client)
  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
});





app.listen(app.get('port'), function() {
  console.log('app is running on port', app.get('port'));
});