// setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// config
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

require('./config/passport')(passport);

// express setup
// logging
app.use(morgan('dev'));
// parse cookies
app.use(cookieParser());
// parse body - difference from bodyParser.<specific>Parser?
app.use(bodyParser());
// passport
app.use(session({ secret: 'fakeSecret' }));
app.use(passport.initialize());
app.use(passport.session());

// routing
require('./server/routes.js')(app, passport);
app.get('/auth', function(req, res){
    res.sendStatus(200);
});
app.use(express.static(__dirname + '/public'));

//launch
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function(){
    console.log('Running...');
});