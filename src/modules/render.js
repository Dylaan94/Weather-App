let renderData = (myData) => {
  console.log("render data running");

  const displayContainer = document.getElementById("displayContainer");
  const conditionDiv = document.getElementById("conditionDiv");
  const placeDiv = document.getElementById("placeDiv");
  const tempDiv = document.getElementById("tempDiv");
  const lowHighTempDiv = document.getElementById("lowHighTempDiv");

  const feelsLikeDiv = document.getElementById("feelsLikeDiv");
  const windDiv = document.getElementById("windDiv");
  const humidityDiv = document.getElementById("humidityDiv");

  conditionDiv.innerHTML = myData.condition;
  placeDiv.innerHTML = myData.name;
  tempDiv.innerHTML = myData.currentTemp + "°";
  lowHighTempDiv.innerHTML =
    "L:" +
    Math.round(myData.tempMin) +
    "°" +
    " H:" +
    Math.round(myData.tempMax) +
    "°";
  feelsLikeDiv.innerHTML = "feels like: " + Math.round(myData.feelsLike) + "°";
  windDiv.innerHTML = "wind speed: " + Math.round(myData.windSpeed) + " mph";
  humidityDiv.innerHTML = "humidity: " + myData.humidity + "%";
};

export { renderData };
