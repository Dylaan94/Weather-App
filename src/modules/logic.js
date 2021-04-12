let myKey = config.WEATHER_API_KEY

let getByCityName = async (searchValue) => {

    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=metric&APPID=" + myKey,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    let newData = processData(weatherData)
    console.log(weatherData)
}

// processes data and creates new object included the data needed
// can add others to this later on

let processData = (weatherData) => {
    const myData = {
        name: weatherData.name,
        condition: weatherData.weather[0].description,
        currentTemp: Math.round(weatherData.main.temp),
        tempMax: weatherData.main.temp_max,
        tempMin: weatherData.main.temp_min,
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
    }
    console.log(myData)
    return myData
}

export {
    getByCityName
}