//API keys
const myKey = config.WEATHER_API_KEY
let defaultCity = 'Birmingham,uk'

import { test, getByCityName } from './modules/logic'

const submitBtn = document.getElementById('submitBtn')

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

//getByCityName();


