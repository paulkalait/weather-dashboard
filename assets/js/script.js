var apiKey = "aa4bb6474b2954b1c9b7ca7e977ee0df"
//gives you the lat and long
var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + apiKey
var lat;
var long;
//form to search city
var cityFormEl = document.querySelector("#cityform")

//cityInput
var cityInput = document.querySelector("#search-city")
//selecting the current weather date header in container
var currentWeatherDateEl = document.querySelector("#currentweatherdate")

//current weather details ul on html (Temperature, humidity, Wind Speed, Uv Index)
var currentWeatherDetailsEl = document.querySelector("#currentWeatherDetails")

//query selector targeting the header dates of the 5 day cards 
var weatherDateEl = document.querySelector(".weatherdate")
//one day gives lat long  
// var citySearch = "boston";
//gives you the city look up 
var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + apiKey

//display url data on inner html 
var displayFiveDay = function(data){

    for(var i = 0; i < data.length; i++){

    }
}


var formSubmitHandler = function(event){
  event.preventDefault();

  var userInput = cityInput.value.trim();

    if (userInput){
      getWeatherApi(userInput);
      cityInput.value = ""
    }else{
      alert("Please enter a City")
    }

}


//when i click on search button it will run this fetch request
var getWeatherApi = function(){


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
          // console.log(response)
          return response.json()
      })
      //left off want to display the data of the onecallurl 
      .then(function(data){
        console.log(data)

        //call display function here to display five day forecast and current weather dom elements?
        // ->

      })
      //insert lat and long variables in the onecall functiom
    // console.log(data)
  });
}

  



  cityFormEl.addEventListener("submit", formSubmitHandler)