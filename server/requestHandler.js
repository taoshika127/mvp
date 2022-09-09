const { getWeather, getImage } = require('../nasaAPI.js');
const { saveDiary, saveWeather, readDiaries } = require('../db/database.js');

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
      res.send(result.data[0].url);
    })
  },

  postHandler: (req, res) => {
    var [date, body] = [req.body.date, req.body.body];
    saveDiary({date, body}, () => {
      readDiaries((data) => {
        res.send(data.reverse());
      })
    })
  },

  getDiariesHandler: (req, res) => {
    readDiaries((data) => {
      res.send(data.reverse());
    })
  }
}

