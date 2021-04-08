const myKey = config.WEATHER_API_KEY

import { test, getByCityName } from './modules/logic'

console.log('webpack is working look at it')
console.log(myKey)


getByCityName();
test();


