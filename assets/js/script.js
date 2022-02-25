var apiKey = "aa4bb6474b2954b1c9b7ca7e977ee0df"
//gives you the lat and long
var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + apiKey + "&units=imperial"
var lat;
var long;
//one day gives lat long  

//gives you the city look up 
var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&appid=" + apiKey + "&units=imperial"
var citySearch = boston;


fetch(apiUrl)
  .then(function (response) {
    console.log(apiUrl)
    return response.json();
  })

  //nest the onecall in a .then
  .then(function (data) {
    console.log(data)

    //[0].lat.long 


  });


  //subset api is the one call 