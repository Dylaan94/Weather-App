// display data on the DOM
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

// change background based on weather description
let renderBackground = (weatherMain) => {
  console.log("renderbackground is running");
  console.log(weatherMain);
  if (weatherMain == "Clear") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg')";
  } else if (weatherMain == "Clouds") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg')";
  } else if (weatherMain == "Drizzle") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2018/08/24/23/37/raindrop-3629132_1280.jpg')";
  } else if (weatherMain == "Rain") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2013/02/21/19/11/rain-84648_1280.jpg')";
    document.getElementById("displayContainer").style.color = "white";
  } else if (weatherMain == "Thunderstorm") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_1280.jpg')";
    document.getElementById("displayContainer").style.color = "white";
  } else if (weatherMain == "Snow") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/02/15/11/15/wintry-2068298_1280.jpg')";
  } else if (weatherMain == "Mist") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/08/02/15/50/hilly-2572197_1280.jpg')";
  } else if (weatherMain == "Smoke") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2019/03/15/17/06/city-4057536_1280.jpg')";
  } else if (weatherMain == "Haze") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_1280.jpg')";
  } else if (weatherMain == "Dust") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2019/09/17/12/54/landscape-4483412_1280.jpg')";
  } else if (weatherMain == "Fog") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/02/22/20/02/landscape-2090495_1280.jpg')";
  } else if (weatherMain == "Ash") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/12/14/09/41/new-zealand-3018634_1280.jpg')";
  } else if (weatherMain == "Squall") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2018/02/17/14/12/storm-3160015_1280.jpg')";
  } else if (weatherMain == "Tornado") {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2018/02/28/23/02/tornado-3189351_1280.jpg')";
    document.getElementById("displayContainer").style.color = "white";
  }
};

export { renderData, renderBackground };
