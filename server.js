// setup
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// config
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

//require('./config/passport')(passport);

// express setup
// logging
app.use(morgan('dev'));
// parse cookies
app.use(cookieParser());
// parse body - difference from bodyParser.<specific>Parser?
app.use(bodyParser());
// passport
app.use(session({ secret: 'fakeSecret' }));
app.use(passport.initialize);
app.use(passport.session());
// might kill this... uses session messages
app.use(flash());

// routing
app.use(express.static(__dirname + '/public'));
require('./server/routes.js')(app, passport);

//launch
app.listen(port, process.env.IP || '0.0.0.0', function(){
    console.log('Running...');
});