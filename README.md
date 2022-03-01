# weather-dashboard


## Summary:
This project's main focus is to highlight the importance and significance API's have. I created my weather dashboard website by leveraging another website's API. In other words, I was able to build a website based over someone else's data. The use of API URL's are significant because it allows for one to display and access any tyype of data they like and manipulate/display it onto their website.

## Here were the Necessary steps in creating this project:
1. found the right API's on openweathermap.org to use the .then and fetch() method. The fetch allowed me to request the data from the openweather source. I used two URl's to complete this assignment. I used a geo api url to access the latitude and longitude data from the cities the user inputs, and then i used a onecall url which was used to convert those lat and long coordinates to display the city's data. Here is a screenshot of the fetch and .then process between the two api URls:

    ![screenshot](assets/css/images.fetch.png)

    i defined the lat and long variable's as the apiURL's lat and lon properties. This allowed me to nest those cooridinates into the oneCallUrl link, making it dynamic. 

2. I had to create two functions to display the data. To do this I leveraged the backtick method to conveniently and efficienty create my elements with the URL data. For displaying the five day weather, i created a variable called card container to hold the weather card. In this container i nested my bootstrap card elements, a for()loop to append the data.daily[i] array values onto the card. After this, I appened it onto the innerHTMl. Here is a screenshot of the process:

    ![screenshot](assets/css/images.display.png)

    there are three variables that take part in the displayFiveDayFunction. The var cardContainer, which is what holds the for() loop and the backticks, var cardQuery, the variable that stores each individual card's data from the api, and then fiveDayCardsContainerEl which is what represents the html element that attaches the cardcontainer onto it. 

3. I then Saved the city data into LocalStorage. I did this by creating a function and a variable called 'cityArray' that equals an array. I set the localsorage item's value to this variable, then cityArray was used in creating a forloop to append the var eachnewcity button onto the html page. The data that is being pushed into this cityArray is the userInput (the variable that defines the city value the user inputs into the search bar). Here is a screenshot of the saveCity function:

    ![screenshot](assets/css/images.localstorage.png)

    the var eachNewCity are the saved city buttons the user see's on the left side of the webpage (bellow the search bar).


## Conclusion
This challenge is a must for any upcoming developer to take on. It will give them the exposure in using the fetch .hen method to create a functional web page. using the fetch method is a greate way in accessing another webpage's data in creating a website. 

## Links 
Here are some links to some resources that have helped me create this project:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

