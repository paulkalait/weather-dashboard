var apiKey = "aa4bb6474b2954b1c9b7ca7e977ee0df"
//gives you the lat and long
var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + apiKey
var lat;
var long;
//one day gives lat long  
var citySearch = "boston";
//gives you the city look up 
var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&appid=" + apiKey


//when i click on search button it will run this fetch request
var searchButton = function(){

    fetch(apiUrl)
  .then(function (response) {
    // console.log(apiUrl)
    return response.json();
  })

  //nest the onecall in a .then to isolate
  .then(function (data) {
    var lat = data[0].lat
    var long = data[0].lon
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=minutely,hourly&appid=" + apiKey
      fetch(oneCallUrl)
      .then(function (response){
          console.log(oneCallUrl)
          return response.json()
      })
      //left off want to display the data of the onecallurl 
      .then(console.log(oneCallUrl, data))
     
      //insert lat and long variables in the onecall functiom
    // console.log(data)
  });
}

  



  //subset api is the one call 