var app, express;

express = require('express');

app = express();

app.use(express.bodyParser());

app.use(express["static"](__dirname + '/../client'));

app.use('views', __dirname + '/../views');

app.set('view engine', 'jade');

app.set('view options', {
  layout: false
});

app.get('/', function(req, res) {
  return res.render('index');
});

app.get('/match', function(req, res) {
  return res.render('partials/match');
});

app.get('/menu', function(req, res) {
  return res.render('partials/menu');
});

app.get('/team', function(req, res) {
  return res.render('partials/team');
});

app.listen(3005, function() {
  return console.log('My App is listening on por 3005');
});
