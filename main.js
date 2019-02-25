//Define Global Variables
var city = document.querySelectorAll('h1 span');
var weather = document.querySelectorAll('p span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        var name = document.createTextNode(apiResult.name);
        city[0].appendChild(name);

        var weatherDesc = document.createTextNode(apiResult.weather[0].description);
        weather[0].appendChild(weatherDesc);

        var weatherTemp = document.createTextNode(apiResult.main.temp);
        weather[1].appendChild(weatherTemp);

        console.log(apiResult);

    }
};

function convertToF(kelvin) {
  var fahrenheit = document.getElementById("outputFahrenheit");
  fahrenheit = ((kelvin - 273.15)*1.8) + 32;
  return fahrenheit;
}

xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=27519,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
