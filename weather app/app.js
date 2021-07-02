// window.addEventListener('load', () => {
//   let long,
//     lat
//
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//       long = position.coords.longitude
//       lat = position.coords.latitude
//     })
//   } else {
//     h1.textContent = "Hey dis is not working because resons"
//   }
// })
const fetch = require('node-fetch')
fetch("https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2021-06-24T00%3A00%3A00&aggregateHours=24&location=tver%2C%20russia&endDateTime=2021-06-25T24%3A00%3A00&unitGroup=metric&dayStartTime=8%3A00%3A00&contentType=json&dayEndTime=17%3A00%3A00&shortColumnNames=0", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "8e6dcd49a8mshbc060c6f9a099dcp1e7936jsnbbb20c453636",
    "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
