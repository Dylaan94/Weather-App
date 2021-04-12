let renderData = (myData) => {
  console.log("render data running");

  const displayContainer = document.getElementById("displayContainer");
  const conditionDiv = document.getElementById("conditionDiv");
  const placeDiv = document.getElementById("placeDiv");
  const tempDiv = document.getElementById("tempDiv");
  const lowTempDiv = document.getElementById("lowTempDiv");
  const highTempDiv = document.getElementById("highTempDiv");

  const feelsLikeDiv = document.getElementById("feelsLikeDiv");
  const windDiv = document.getElementById("windDiv");
  const humidityDiv = document.getElementById("humidityDiv");

  conditionDiv.innerHTML = myData.condition;
  placeDiv.innerHTML = myData.name;
  tempDiv.innerHTML = myData.currentTemp;
  lowTempDiv.innerHTML = 'low: ' + myData.tempMin;
  highTempDiv.innerHTML = 'high: ' + myData.tempMax;
  feelsLikeDiv.innerHTML = "feels like: " + myData.feelsLike;
  windDiv.innerHTML = "wind speed: " + myData.windSpeed;
  humidityDiv.innerHTML = "humidity: " + myData.humidity;
};

export { renderData };
