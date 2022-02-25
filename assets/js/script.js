var apiKey = "aa4bb6474b2954b1c9b7ca7e977ee0df"
var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + apiKey
var lat;
var long;
//one day gives lat long  

var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&appid=" + apiKey
var citySearch = boston;


fetch(apiUrl)
  .then(function (response) {
    console.log(apiUrl)
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });
