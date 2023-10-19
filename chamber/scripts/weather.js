$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric&appid=ab85ba57bbbb423fb62bfb8201126ede", function(data) {
    console.log(data);
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $(".temp").append(temp + ' &#8451;'); 
    $(".weather").append(weather);
});
