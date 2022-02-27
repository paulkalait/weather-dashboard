
var apiKey = "aa4bb6474b2954b1c9b7ca7e977ee0df"
//gives you the lat and long
var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + apiKey
var lat;
var long;
//form to search city
var searchHistoryList = document.querySelectorAll(".each-new-city")
var cityFormEl = document.querySelector("#cityform")
var userInput;
//five day weather
var fiveDayCardsContainerEl = document.querySelector("#fivedaylist")
//cityInput
var cityInput = document.querySelector("#search-city")
//selecting the current weather date header in container
var currentWeatherDateEl = document.querySelector("#currentweatherdate")
var currentWeatherTitle = document.querySelector("#current-weather-title")

//city list container
var saveCityContainer = document.querySelector("#city-list")
//current weather details ul on html (Temperature, humidity, Wind Speed, Uv Index)
var currentWeatherDetailsEl = document.querySelector("#currentWeatherDetails")

//query selector targeting the header dates of the 5 day cards 
var weatherDateEl = document.querySelector(".weatherdate")

var cityArray = JSON.parse(localStorage.getItem("cities-list")) || []

var saveCity = function(){

  var i = 0
  if(cityArray.length === 0) {
    cityArray = []
  }

  if(!cityArray.includes(userInput)) {
    cityArray.push(userInput)
  }

  saveCityContainer.innerHTML = '';

      for(; i < cityArray.length; i ++){
        var eachNewCity = document.createElement("button");
        eachNewCity.setAttribute("style","padding: 3px; margin: 2%; font-size: 2.00vh" )
        eachNewCity.setAttribute('data-name', cityArray[i])
        eachNewCity.className = "each-new-city"
        eachNewCity.textContent = cityArray[i]
        saveCityContainer.appendChild(eachNewCity);
    }
  localStorage.setItem("cities-list", JSON.stringify(cityArray))
}

var weatherDashboard = function(data){
 
  var weatherContainer = `<h2 id="currentweatherdate" class="pl-3 mt-3"><strong>Weather: ${moment().utc(data.current.dt, "DD-MM-YYYY")}</strong></h2>
  <ul id="currentWeatherDetails" class="list-unstyled " >
      <li class="details">Temperature: ${data.current.temp} °F</li>
      <li class="details">Humidity: ${data.current.humidity}%</li>
      <li class="details">Wind Speed: ${data.current.wind_speed} MPH</li>
      <li class="details">UVI Index: ${data.current.uvi}</li>

  </ul> `
 currentWeatherTitle.innerHTML = weatherContainer
}

//display url data on inner html 
var displayFiveDay = function(data){

   var cardContainer = ``
    for(var i = 0; i < 5; i++){

      var cardQuery = `<div class="card  m-2 p-1" style="width: 14rem; height: 15rem;">
      <h2 class="weatherdate text-light"></h2>
      <ul class="list-unstyled weathercards ">
      <li class="text text-light p-2">Date: ${moment.unix(data.daily[i].dt).format("MMMM Do")}</li>
          <img class="text text-light p-2" src="https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png">;</img>
          <li class="text text-light p-2">Temp: ${data.daily[i].temp.day} °F</li>
          <li class="text text-light p-2">Wind: ${data.daily[i].wind_speed} MPH</li>
          <li class="text text-light p-2">Humidity: ${data.daily[i].humidity}%</li>
      </ul>
      </div>`
      cardContainer += cardQuery
    }
    fiveDayCardsContainerEl.innerHTML = cardContainer
}


var formSubmitHandler = function(event){
  event.preventDefault();


  userInput = cityInput.value.trim();
    
    if (userInput){
      getWeatherApi(userInput);
      cityInput.value = ""
    }else{
      alert("Please enter a City")
    }
    saveCity();
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
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=minutely,hourly&units=imperial&appid=" + apiKey
      fetch(oneCallUrl)
      .then(function (response){
          return response.json()
      })
      //left off want to display the data of the onecallurl 
      .then(function(data){
        console.log(data)
        //call display function here to display five day forecast and current weather dom elements?
      displayFiveDay(data);


      weatherDashboard(data)

      })
      //insert lat and long variables in the onecall functiom
    // console.log(data)
  });
}

var formSubmitHandlerHistory = function(event){
  console.log("started")
  event.preventDefault();

  btn = event.target
  console.log(btn)
  userInput = btn.getAttribute("data-name")
    
    if (userInput){
      getWeatherApi(userInput);
      cityInput.value = ""
    }else{
      alert("Please enter a City")
    }
    saveCity();
}


saveCityContainer.addEventListener("click", formSubmitHandlerHistory)

cityFormEl.addEventListener("submit", formSubmitHandler)