//server setup
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./routes/index'));

app.listen(port, function() {
    console.log('Server listening on port ' + port);
} )
