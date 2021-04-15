/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ \"./src/modules/logic.js\");\n//API keys\nconst myKey = config.WEATHER_API_KEY\n\n// variables\nconst submitBtn = document.getElementById(\"submitBtn\");\nlet defaultCity = 'Birmingham,uk'\n\n// imports\n;\n\n// event listeners\nsubmitBtn.addEventListener('click', () => {\n    let searchValue = document.getElementById('searchValue').value\n    console.log(searchValue)\n    ;(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getByCityName)(searchValue)\n    // reset values\n    document.getElementById('searchValue').value = '';\n    searchValue = \"\";\n    console.log(searchValue);\n})\n\n// Run Birmingham if no data input\n;(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getByCityName)(defaultCity);\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getByCityName\": () => (/* binding */ getByCityName)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nlet myKey = config.WEATHER_API_KEY;\n\nlet getByCityName = async (searchValue) => {\n  const response = await fetch(\n    \"https://api.openweathermap.org/data/2.5/weather?q=\" +\n      searchValue +\n      \"&units=metric&APPID=\" +\n      myKey,\n    { mode: \"cors\" }\n  );\n  // error handling\n  if (response.status === 400 || response.status === 404) {\n    return error();\n  } else {\n    const weatherData = await response.json();\n    processData(weatherData);\n    console.log(weatherData);\n  }\n};\n\n// processes data and creates new object with the data I want to use\n\nlet processData = (weatherData) => {\n  const myData = {\n    name: weatherData.name,\n    condition: weatherData.weather[0].description,\n    currentTemp: Math.round(weatherData.main.temp),\n    feelsLike: weatherData.main.feels_like,\n    tempMax: weatherData.main.temp_max,\n    tempMin: weatherData.main.temp_min,\n    humidity: weatherData.main.humidity,\n    windSpeed: weatherData.wind.speed,\n    weatherMain: weatherData.weather[0].main\n  };\n\n  let weatherDescription = myData.weatherMain;\n  console.log(myData);\n  (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderData)(myData); // send to renderer\n  (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderBackground)(weatherDescription);\n  return myData;\n};\n\nlet error = () => {\n  console.log(\"theres an error bro\");\n  alert('error, please try another city')\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/logic.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderData\": () => (/* binding */ renderData),\n/* harmony export */   \"renderBackground\": () => (/* binding */ renderBackground)\n/* harmony export */ });\n// display data on the DOM\nlet renderData = (myData) => {\n  console.log(\"render data running\");\n\n  const displayContainer = document.getElementById(\"displayContainer\");\n  const conditionDiv = document.getElementById(\"conditionDiv\");\n  const placeDiv = document.getElementById(\"placeDiv\");\n  const tempDiv = document.getElementById(\"tempDiv\");\n  const lowHighTempDiv = document.getElementById(\"lowHighTempDiv\");\n\n  const feelsLikeDiv = document.getElementById(\"feelsLikeDiv\");\n  const windDiv = document.getElementById(\"windDiv\");\n  const humidityDiv = document.getElementById(\"humidityDiv\");\n\n  conditionDiv.innerHTML = myData.condition;\n  placeDiv.innerHTML = myData.name;\n  tempDiv.innerHTML = myData.currentTemp + \"°\";\n  lowHighTempDiv.innerHTML =\n    \"L:\" +\n    Math.round(myData.tempMin) +\n    \"°\" +\n    \" H:\" +\n    Math.round(myData.tempMax) +\n    \"°\";\n  feelsLikeDiv.innerHTML = \"feels like: \" + Math.round(myData.feelsLike) + \"°\";\n  windDiv.innerHTML = \"wind speed: \" + Math.round(myData.windSpeed) + \" mph\";\n  humidityDiv.innerHTML = \"humidity: \" + myData.humidity + \"%\";\n};\n\n// change background based on weather description\nlet renderBackground = (weatherMain) => {\n  console.log(\"renderbackground is running\");\n  console.log(weatherMain);\n  if (weatherMain == \"Clear\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_1280.jpg')\";\n  } else if (weatherMain == \"Clouds\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg')\";\n  } else if (weatherMain == \"Drizzle\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2018/08/24/23/37/raindrop-3629132_1280.jpg')\";\n  } else if (weatherMain == \"Rain\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2013/02/21/19/11/rain-84648_1280.jpg')\";\n    document.getElementById(\"displayContainer\").style.color = \"white\";\n  } else if (weatherMain == \"Thunderstorm\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_1280.jpg')\";\n    document.getElementById(\"displayContainer\").style.color = \"white\";\n  } else if (weatherMain == \"Snow\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2017/02/15/11/15/wintry-2068298_1280.jpg')\";\n  } else if (weatherMain == \"Mist\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2017/08/02/15/50/hilly-2572197_1280.jpg')\";\n  } else if (weatherMain == \"Smoke\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2019/03/15/17/06/city-4057536_1280.jpg')\";\n  } else if (weatherMain == \"Haze\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_1280.jpg')\";\n  } else if (weatherMain == \"Dust\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2019/09/17/12/54/landscape-4483412_1280.jpg')\";\n  } else if (weatherMain == \"Fog\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2017/02/22/20/02/landscape-2090495_1280.jpg')\";\n  } else if (weatherMain == \"Ash\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2017/12/14/09/41/new-zealand-3018634_1280.jpg')\";\n  } else if (weatherMain == \"Squall\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2018/02/17/14/12/storm-3160015_1280.jpg')\";\n  } else if (weatherMain == \"Tornado\") {\n    document.body.style.backgroundImage =\n      \"url('https://cdn.pixabay.com/photo/2018/02/28/23/02/tornado-3189351_1280.jpg')\";\n    document.getElementById(\"displayContainer\").style.color = \"white\";\n  }\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;