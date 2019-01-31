
var clon = 0;
var clat = 0;
var zoom = 1;

let data1;
let data2;

let source = [];
let effect = [];

let temp = [];
let temp2 = [];

let lon = [];
let lat = [];

function preload() {
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0/1024x512?access_token=pk.eyJ1IjoidmlzaGFsMjYwNzAwIiwiYSI6ImNqbHNtb3Z3cTBncmQzcWxieHVnaDFpdXgifQ.tLV__alrVz7n0LIUOc9R2w");
  data1 = loadStrings('./../data/tsevent.txt'); // source of tsunami
  // data2 = loadStrings('./tsrunup.txt'); // effected area by tsunami is showing irrelevant information in aferica region
}

function setup(){

	for(var i = 1 ; i<data1.length ; i++){
		source.push(data1[i])
	}

	/*for(var i = 1 ; i<data2.length ; i++){
		effect.push(data2[i])
	}*/

	var regex = /[+-]?\d+(\.\d+)?/g;

	for(var i = 0 ; i < source.length ; i++){
		var str = source[i];
		var floats = str.match(regex).map(function(v) { return parseFloat(v); });
		temp.push(floats);
	}

	for( var i = 0 ; i< temp.length ; i++){
		let counter = 0;
		for(var j = 0 ; j < temp[i].length ; j++){
			if(temp[i][j] % 1 == 0){
			}else{
				counter = counter + 1;
				if(counter > 2){
				}else{
				temp2.push(temp[i][j]);
				}
			}
		}
	}

	//console.log(temp2.length);


	for(var i = 0 ; i < temp2.length ; i++){
		if(i%2 == 0){
			lat.push(temp2[i]);
		}else{
			lon.push(temp2[i]);
		}
	}

	// console.log(lon);
	// console.log(lat);

	// now we have all lon and lat...


	createCanvas(1024,460);
	translate(width/2,height/2);
	imageMode(CENTER)
	image(mapimg,0,0);

	var cx = mercX(clon);
	var cy = mercY(clat);

	
	for(var i = 0 ; i < lon.length ; i++){

			var lat1 = lat[i];
			var lon1 = lon[i];

			var x = mercX(lon1) - cx;
			var y = mercY(lat1) - cy;

			var size = 5;

			fill(243, 156, 18);
			ellipse(x,y,size,size);
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