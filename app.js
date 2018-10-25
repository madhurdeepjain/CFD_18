var express=require("express");
var app = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var assert = require('assert');

var ejs = require('ejs'); // important view engine 

// Init App
var app = express();
app.set('port', (process.env.PORT || 3000));

var server=app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});

app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// BodyParser Middleware
// used for handlebars data rendering with server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// lets render various pages

app.get('/',function(req,res,next){
  res.render('index');
});

app.get('/emergency' , function(req,res,next){
	res.render('emergency');
});

app.get('/predictions' , function(req,res,next){
	res.render('predictions');
});

app.get('/guid' , function(req,res,next){
	res.render('guidlinsess');
});

app.get('/statistics' , function(req,res,next){
	res.render('statistics');
});

app.get('/recent' , function(req,res,next){
	res.render('ongoing');
});


// NOTE - earthPresent.js has some great code unused....
