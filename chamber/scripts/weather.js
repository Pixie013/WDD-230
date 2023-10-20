// api url
const api_url = "https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric&appid=ab85ba57bbbb423fb62bfb8201126ede";

// Calling that async function
getapi(api_url);

// Defining async function
async function getapi(url) {
    
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    
    // console.log(data);
    var tempStatus = Math.floor(data.main.temp);
    var cityName = data.name+', '+data.sys.country;
    var tempStatusMin = Math.floor(data.main.temp_min);
    var tempStatusMax = Math.floor(data.main.temp_max);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var weatherStatus = data.weather[0].description;
    
    document.getElementById('weather').innerHTML = weatherStatus;
    document.getElementById('temp').innerHTML = tempStatusMin;
    document.getElementById('icon').innerHTML = icon;
    document.getElementById('cityName').innerHTML = cityName;
    $('#icon').attr('src', icon);
}
