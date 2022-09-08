const { getWeatherHandler, postHandler, getImageHandler } = require('./requestHandler.js');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname + '/../dist')));
app.use(express.json());


app.get('/weather', getWeatherHandler);

app.get('/image', getImageHandler);


let port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})