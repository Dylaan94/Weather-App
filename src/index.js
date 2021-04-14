//API keys
const myKey = config.WEATHER_API_KEY

// variables
const submitBtn = document.getElementById("submitBtn");
let defaultCity = 'Birmingham,uk'

// imports
import { getByCityName } from './modules/logic'

// event listeners
submitBtn.addEventListener('click', () => {
    let searchValue = document.getElementById('searchValue').value
    console.log(searchValue)
    getByCityName(searchValue)
    // reset values
    document.getElementById('searchValue').value = '';
    searchValue = "";
    console.log(searchValue);
})

// Run Birmingham if no data input
getByCityName(defaultCity);


