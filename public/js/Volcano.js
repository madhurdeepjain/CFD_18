let mapimg;
var data = {};
var clon = 0;
var clat = 0;
var zoom = 1;
let volcanoesLon = [];
let volcanoesLat = [];
let risk = [];
let hazard = [];
let type = [];

$("#Volcanic").click(function(){
    $("#earth").fadeOut();
    $("#default").fadeOut();
    $("canvas").fadeIn(3000);
    $("#butt").fadeIn(3000);
});

$("#Earthquake").click(function(){
    $("#default").fadeOut();
    $("canvas").fadeOut();
    $("#butt").fadeOut();
    $("#earth").fadeIn(3000);
});

let counter = 0; // by default will be altered by a button...

function preload() {
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0/1024x512?access_token=pk.eyJ1IjoidmlzaGFsMjYwNzAwIiwiYSI6ImNqbHNtb3Z3cTBncmQzcWxieHVnaDFpdXgifQ.tLV__alrVz7n0LIUOc9R2w");
  data = loadJSON('https://data.humdata.org/dataset/a60ac839-920d-435a-bf7d-25855602699d/resource/7234d067-2d74-449a-9c61-22ae6d98d928/download/volcano.json');
}

function setup() {
	createCanvas(1024,460);
	translate(width/2,height/2);
	imageMode(CENTER)
	image(mapimg,0,0);

	var cx = mercX(clon);
	var cy = mercY(clat);


	for(var i = 0 ; i < data['features'].length ; i++){
		volcanoesLon.push(data['features'][i]['properties']['Longitude']);
		volcanoesLat.push(data['features'][i]['properties']['Latitude']);
		risk.push(data['features'][i]['properties']['risk']);
		hazard.push(data['features'][i]['properties']['hazard']);
		type.push(data['features'][i]['properties']['class'])
	}

	// the below terminology are to be used to perform UI based changes
	// 0 counter for filter 1 --> Risk and Hazard difference
	// 1 counter for filter 2 --> Class type
	// class type --> U-HR , U-NHHR , NULL
	// risk --> 243, 156, 18  
	// Hazard --> 91, 44, 111
	// U-HR --> 23, 165, 137
	// U-NHHR --> 52, 152, 219
	// NULL --> 236, 240, 241

	if(counter == 0){

		let newLatR = [];
		let newLonR = [];

		let newLatH = [];
		let newLonH = [];

		for(var i = 0 ; i < data['features'].length ; i++){
			if(risk[i] != hazard[i]){
				newLonH.push(volcanoesLon[i]);
				newLatH.push(volcanoesLat[i]);
			}else{
				newLonR.push(volcanoesLon[i]);
				newLatR.push(volcanoesLat[i]);
			}
		}

		for(var i = 0 ; i < newLatR.length ; i++){

			var lat = newLatR[i];
			var lon = newLonR[i];

			var x = mercX(lon) - cx;
			var y = mercY(lat) - cy;

			var size = 5;

			fill(243, 156, 18);
			ellipse(x,y,size,size);
		}

		for(var i = 0 ; i < newLatH.length ; i++){

			var lat = newLatH[i];
			var lon = newLonH[i];

			var x = mercX(lon) - cx;
			var y = mercY(lat) - cy;

			var size = 5;

			fill(91, 44, 111);
			rect(x,y,size,size);
		}

	}else{

		let newLat1 = [];
		let newLon1 = [];

		let newLat2 = [];
		let newLon2 = [];

		let newLat3 = [];
		let newLon3 = [];

		let typo = ["U-HR" , "U-NHHR"];

		for(var i = 0 ; i < data['features'].length ; i++){

			if(typo[0] == type[i]){
				newLat1.push(volcanoesLat[i]);
				newLon1.push(volcanoesLon[i]);
			}else if(typo[1] == type[i]){
				newLat2.push(volcanoesLat[i]);
				newLon2.push(volcanoesLon[i]);
			}else{
				newLat3.push(volcanoesLat[i]);
				newLon3.push(volcanoesLon[i]);
			}

		}

		for(var i = 0 ; i < newLat1.length ; i++){

			var lat = newLat1[i];
			var lon = newLon1[i];

			var x = mercX(lon) - cx;
			var y = mercY(lat) - cy;

			var size = 5;

			fill(23, 165, 137);
			ellipse(x,y,size,size);
		}

		for(var i = 0 ; i < newLat2.length ; i++){

			var lat = newLat2[i];
			var lon = newLon2[i];

			var x = mercX(lon) - cx;
			var y = mercY(lat) - cy;

			var size = 5;

			fill(52, 152, 219);
			rect(x,y,size,size);
		}

		for(var i = 0 ; i < newLat3.length ; i++){

			var lat = newLat3[i];
			var lon = newLon3[i];

			var x = mercX(lon) - cx;
			var y = mercY(lat) - cy;

			var size = 5;

			fill(236, 240, 241);
			rect(x,y,size,size);
		}

	}
}

function mercX(lon){
	lon = radians(lon);
	var a = (256 / PI)*(pow(2,zoom));
	var b = lon + PI;
	return a*b;
}

function mercY(lat){
	lat = radians(lat);
	var a = (256 / PI)*(pow(2,zoom));
	var b = (PI-log(tan(PI/4 + lat/2)));
	return a*b;
}

function fun1(){
	counter = 0;
	setup();
}
function fun2(){
	counter = 1;
	setup();
}
