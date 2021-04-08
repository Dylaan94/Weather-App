let myKey = config.WEATHER_API_KEY

let test = () => {
    console.log('logic is running')
}

let getByCityName = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=" + myKey,
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
        condition: weatherData.weather[0].description,
        currentTemp: Math.round(weatherData.main.temp)
    }
    console.log(myData)
    return myData
}

export {
    test,
    getByCityName
}