'use strict';
const request = require('request');
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
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
let total_results = 0;

let imagelink = 'default';

// Mongo URI

const mongoURI = 'mongodb://salvador260700:salvador260700@ds042459.mlab.com:42459/salvador_db1';

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

app.get('/uplift' , function(req,res,next){
	res.render('uplift',{message : ''});
});

app.get('/live_stock' , function(req,res,next){
	var name = [];
	var phone1 = [];
	var phone2 = [];
	var disasters = [];
	var lat0 = [];
	var lon0 = [];

	mongo.MongoClient.connect(mongoURI, { useNewUrlParser: true }, function(err, db) {
	  if (err) console.log("error recieved");
	  const dbo = db.db('salvador_db1');
	  dbo.collection('salvador_col01').find({}).toArray(function(err, result) {
	    if (err) console.log('Error detected');

	    console.log(result);
	    console.log(result[1]['Victim_Name']);

	    var i = 0;

	    while(result[i] != null){
	    	if(result[i].Victim_Name && result[i].Latitude && result[i].Longitude){
	    		name.push(result[i].Victim_Name);
	    		phone1.push(result[i].Personal_Contact_Number);
	    		phone2.push(result[i].Family_Contact_Number);
	    		disasters.push(result[i].Disaster_Type);
	    		lat0.push(result[i].Latitude);
	    		lon0.push(result[i].Longitude);
	    	};
	    	i = i + 1;
	    };

	      res.render('liveStock',{
		      name : name,
		      phone1 : phone1,
		      phone2 : phone2,
		      disasters : disasters,
		      lat0 : lat0,
		      lon0 : lon0,
		      Victim : [],
		      Disaster : [],
		      Lat : [], 
		      Lon : [],
		      total_results : 0
	    	});
	    db.close();
	  });
	});

	});

// ------------------ Database Work starts from here ---------------------

app.post('/locationRetrieve',function(req,res,next){

  var item = {
    Victim_Name : req.body.name,
    Personal_Contact_Number : req.body.phone01,
    Family_Contact_Number : req.body.phone02,
    Disaster_Type : req.body.disaster,
    Latitude : req.body.lat,
    Longitude : req.body.lon
  };

  console.log(item);

  mongo.MongoClient.connect(mongoURI, { useNewUrlParser: true }, function(err,db){
    const dbo = db.db('salvador_db1');

    dbo.collection('salvador_col01').insertOne(item, function(err, res) {
      assert.equal(null, err);
      console.log('Sucessfull Submission');
      db.close();
    });
  });
  res.redirect('/emergency');
});

// ------------ Search Options here ----------------------

app.post('/Namesearch', function(req, res, next){

   var input = req.body.searchbar;
   var Victim = [];
   var Disaster = [];
   var Lat = [];
   var Lon = [];
   var phone1 = [];
   var phone2 = [];
   
   mongo.MongoClient.connect(mongoURI, { useNewUrlParser: true }, function(err, db) {
    const dbo = db.db('salvador_db1');
    dbo.collection('salvador_col01').find({"Victim_Name" : input}).toArray(function(err,result){

    	console.log(result);

    	total_results = result.length;

    	for(var i = 0 ; i < total_results ; i++){
    		Victim.push(result[i]['Victim_Name']);
    		Disaster.push(result[i]['Disaster_Type']);
    		Lat.push(result[i]['Latitude']);
    		Lon.push(result[i]['Longitude']);
    		phone1.push(result[i]['Personal_Contact_Number']);
    		phone2.push(result[i]['Family_Contact_Number']);
    	}

      	res.render('liveStock', {Victim : Victim, Disaster : Disaster,
      			    Lat : Lat, Lon : Lon, name : Victim, phone1 : phone1, phone2 : phone2, 
      			    disasters : Disaster, lat0 : Lat, lon0 : Lon, total_results : total_results})
    	db.close();
      	console.log("Sucessfull Search");
    });
  });
});

// ---------------- Image Uploading -----------------------


const storage2 = multer.diskStorage({
  destination: './public/uploads2/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload2 = multer({
  storage: storage2,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');


// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}


app.post('/Imupload', (req, res) => {
  upload2(req, res, (err) => {
    if(err){
      res.render('uplift');
    } else {
        res.render('uplift', {
          msg: 'File Uploaded!',
          message : '',
          file: `uploads2/${req.file.filename}`
        });
      }
  });
});

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('vishal');


// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

const subscriptionKey = '2fda92f422f54ddcaedbeea7ee9e8c36';

app.post('/ImageUpload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('uplift', {
        msg: err,
        message : ''
      });
    } else {
      if(req.file == undefined){
        res.render('uplift', {
          msg: 'Error: No File Selected!',
          message : ''
        });
      } else {
      	imagelink = req.file.filename;
      	console.log(req.file.filename);
      	console.log("##########");
        res.render('uplift', {
          msg: 'File Uploaded!',
          message : '',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });

  app.post('/ImageSearch', function(req,res,next){

  // const imageUrl = 'https://raw.githubusercontent.com/madhurdeepjain/CFD_18/master/public/uploads/' + imagelink;
  const imageUrl = 'http://students.iitk.ac.in/roboclub/assets/images/seci/Madhur%20Jain.jpg';
  // console.log(imagelink);
  let jsonResponse = '';

  let options = {
      uri: 'https://centralindia.api.cognitive.microsoft.com/face/v1.0/detect',
      qs: {
      'returnFaceId': 'true',
      'returnFaceLandmarks': 'false'
      },
      body: '{"url": ' + '"' + imageUrl + '"}',
      headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key' : subscriptionKey
      }
  };

  request.post(options, (error, response, body) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }

    let jsonResponse = JSON.parse(body);
    let faceid = jsonResponse[0].faceId;

    console.log(faceid);

    options = {
      uri: 'https://centralindia.api.cognitive.microsoft.com/face/v1.0/findsimilars',
      body: '{"faceId": "' + faceid + '","faceListId": "1"' + '}',
      headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key' : subscriptionKey
      }
    };
    request.post(options, (error, response, body) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    jsonResponse = JSON.parse(body);
    console.log('JSON Response\n');
    console.log("#########" + jsonResponse + "###########");
    if(jsonResponse == ''){
    	res.render('uplift', {msg : '', message : 'Person Not Found'});
    } else {
    	res.render('uplift', {msg : '', message : 'Person Found !!'});
    }
    });

  });

  // ----------- Once data base working is completed -----------------

  /*
  mongo.MongoClient.connect(mongoURI, { useNewUrlParser: true }, function(err, db) {
    const dbo = db.db('salvador_db1');
    dbo.collection('salvador_col01').find({"pfaceId" : ''}).toArray(function(err,result){ // jsonResponse[0].persistedFaceId

      console.log(result);

      res.render('uplift', {message : "Person found!!", msg : ''});
      db.close();
      console.log("Sucessfull Image Search");
    });
  });
  */

});


});
