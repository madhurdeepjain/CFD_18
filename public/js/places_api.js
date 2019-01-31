function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Error");
  }
}

function showPosition(position) {
  lon = position.coords.latitude;
  lat = position.coords.longitude;
  console.log("hello");

  console.log(lon) ;
}