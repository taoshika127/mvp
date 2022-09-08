const { getWeather, getImage } = require('../nasaAPI.js');
const { saveDiaries, saveWeather } = require('../db/database.js');

module.exports = {
  getWeatherHandler: (req, res) => {
    getWeather((result) => {
      saveWeather(result.data, () => {
        res.send(result.data[0]);
      })
    })
  },

  getImageHandler: (req, res) => {
    getImage((result) => {
      console.log(result.data);
      res.send(result.data[0].url);
    })
  },

  postHandler: (req, res) => {
  }

}

