import { renderData, renderBackground } from "./render";

let myKey = config.WEATHER_API_KEY;

let getByCityName = async (searchValue) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchValue +
      "&units=metric&APPID=" +
      myKey,
    { mode: "cors" }
  );
  // error handling
  if (response.status === 400 || response.status === 404) {
    return error();
  } else {
    const weatherData = await response.json();
    processData(weatherData);
    console.log(weatherData);
  }
};

// processes data and creates new object with the data I want to use

let processData = (weatherData) => {
  const myData = {
    name: weatherData.name,
    condition: weatherData.weather[0].description,
    currentTemp: Math.round(weatherData.main.temp),
    feelsLike: weatherData.main.feels_like,
    tempMax: weatherData.main.temp_max,
    tempMin: weatherData.main.temp_min,
    humidity: weatherData.main.humidity,
    windSpeed: weatherData.wind.speed,
    weatherMain: weatherData.weather[0].main
  };

  let weatherDescription = myData.weatherMain;
  console.log(myData);
  renderData(myData); // send to renderer
  renderBackground(weatherDescription);
  return myData;
};

let error = () => {
  console.log("theres an error bro");
  alert('error, please try another city')
};

export { getByCityName };
