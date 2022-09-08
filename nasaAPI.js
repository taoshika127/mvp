const axios = require('axios');
const { API_KEY } = require('./config.js');
const { todaysDate, randomDate } = require('./dateHelper.js');

var today = todaysDate();
const weatherOption = {
  method: 'GET',
  url: `https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/notifications?startDate=${today}&type=all`
}


const getWeather = (cb) => {
    axios(weatherOption)
      .then((data) => {
        cb(data)
      })
      .catch(err => {
        console.error(err);
      })
}

const getImage = (cb) => {
  var random = randomDate();
  const imageOption = {
    method: 'GET',
    url: `https://api.nasa.gov/planetary/apod?start_date=${random}&end_date=${random}&api_key=${API_KEY}`
  };
  axios(imageOption)
    .then((data) => {
      cb(data);
    })
    .catch(err => {
      console.error(err);
    })
}

module.exports = { getWeather, getImage };

