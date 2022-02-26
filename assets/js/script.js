var apiKey = "aa4bb6474b2954b1c9b7ca7e977ee0df"
//gives you the lat and long
var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + apiKey
var lat;
var long;
//form to search city
var cityFormEl = document.querySelector("#cityform")

//five day weather
var fiveDayCardsContainerEl = document.querySelector("#fivedaylist")
//cityInput
var cityInput = document.querySelector("#search-city")
//selecting the current weather date header in container
var currentWeatherDateEl = document.querySelector("#currentweatherdate")
var currentWeatherTitle = document.querySelector("#current-weather-title")

//current weather details ul on html (Temperature, humidity, Wind Speed, Uv Index)
var currentWeatherDetailsEl = document.querySelector("#currentWeatherDetails")

//query selector targeting the header dates of the 5 day cards 
var weatherDateEl = document.querySelector(".weatherdate")
//one day gives lat long  
// var citySearch = "boston";
//gives you the city look up 
// var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + apiKey

var weatherDashboard = function(data){
 
  var weatherContainer = `<h2 id="currentweatherdate" class="pl-3 mt-3"><strong>Weather:</strong></h2>
  <ul id="currentWeatherDetails" class="list-unstyled " >
      <li class="details">Temperature:</li>
      <li class="details">Humidity:</li>
      <li class="details">Wind Speed:</li>
      <li class="details">UV Index:</li>

  </ul> `
 currentWeatherTitle.innerHTML = weatherContainer

}

//display url data on inner html 
var displayFiveDay = function(data){

   var cardContainer = ``
    for(var i = 0; i < data.daily.length; i++){

      var cardQuery = `<div class="card  m-2 p-1" style="width: 14rem; height: 15rem;">
      <h2 class="weatherdate text-light"></h2>
      <ul class="list-unstyled weathercards ">
      <li class="text text-light p-2">Temp:${moment().utc(data.daily[i].dt, "DD-MM-YYYY")}</li>
          <li class="text text-light p-2">Temp:${data.daily[i].temp.day}</li>
          <li class="text text-light p-2">Wind:${data.daily[i].wind_speed}</li>
          <li class="text text-light p-2">Humidity:${data.daily[i].humidity}</li>
      </ul>
      </div>`
      cardContainer += cardQuery
     
    }
    fiveDayCardsContainerEl.innerHTML = cardContainer
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
var getWeatherApi = function(userInput){

var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=" + apiKey
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
          console.log(response)
          return response.json()
      })
      //left off want to display the data of the onecallurl 
      .then(function(data){
        console.log(data)

        //call display function here to display five day forecast and current weather dom elements?
      displayFiveDay(data);

      })
      //insert lat and long variables in the onecall functiom
    // console.log(data)
  });
}

  



  cityFormEl.addEventListener("submit", formSubmitHandler)