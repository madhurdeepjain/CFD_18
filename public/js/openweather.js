let data;

// getting location
let long = document.getElementById('long');
let lat = document.getElementById('lat');
let weather = document.getElementById('weather');
let town = document.getElementById('name');
let country = document.getElementById('country');
let temp = document.getElementById('temp');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let sea = document.getElementById('sea');
let wind = document.getElementById('wind');

function MyLocation(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    long.innerHTML = "Location tracking not possible";
    lat.innerHTML = "Location tracking not possible";
  }
}

function showPosition(position){
  long.innerHTML = position.coords.longitude;
  lat.innerHTML = position.coords.latitude;
  lonD = parseFloat(long.innerHTML);
  latD = parseFloat(lat.innerHTML)
  url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latD + '&lon=' + lonD + '&appid=aeaf3c2b6dca28e5c5ace5a2ca0f95aa';
  $.getJSON(url, function(result){
  	data = result;
	console.log(data);
	town.innerHTML = data['name'];
	country.innerHTML = data['sys']['country'];
	weather.innerHTML = data['weather'][0]['description'];
	temp.innerHTML = data['main']['temp'] + ' Kelvin';
	humidity.innerHTML = data['main']['humidity'] + " %";
	pressure.innerHTML = data['main']['pressure'] + " pascal";
	sea.innerHTML = data['main']['sea_level'];
	wind.innerHTML = data['wind']['speed'] + " Knots"  + " | " + data['wind']['deg'] + " degree ";
  });
}

MyLocation();


	
