let mapimg;
var data = {};
var clon = 0;
var clat = 0;
var zoom = 1;

function preload() {
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0/1024x512?access_token=pk.eyJ1IjoidmlzaGFsMjYwNzAwIiwiYSI6ImNqbHNtb3Z3cTBncmQzcWxieHVnaDFpdXgifQ.tLV__alrVz7n0LIUOc9R2w");
}

function setup() {
	createCanvas(960,460);
	translate(width/2,height/2);
	imageMode(CENTER)
	image(mapimg,0,0);

	var cx = mercX(clon);
	var cy = mercY(clat);

	let lat = [53.255,19.1223,1.2219,19.4721,37.7510,-7.5407,-1.5220,46.8523,40.8224,32.7577,31.58,34.95,36.39,14.01,28.27,-5.05];
	let lon = [158.8297,-104.0072,-77.3592,-155.5922,14.9934,110.4457,29.2495,-121.7603,14.4289,130.3015,130.65,-120.44,25.46,121,-16.64,151.33];
	let color = ["red","blue","green","cyan","pink","purple","orange","yellow"];

	for(var i = 0 ; i < lat.length/2 ; i++){
		var x1 = mercX(lon[i]) - cx;
		var y1 = mercY(lat[i]) - cy;

		console.log(color[i]);
		fill(color[i]);
		rect(x1,y1,5,5);		
	}

	for(var i = 0 ; i < lat.length/2 ; i++){
		var x1 = mercX(lon[7+i]) - cx;
		var y1 = mercY(lat[7+i]) - cy;

		console.log(color[i]);
		fill(color[i]);
		ellipse(x1,y1,7,7);		
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