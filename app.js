var express = require('express');
var app = express();
var pug = require('pug');
var routy = require('./routes.js');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', routy);
app.listen(3000);