const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/diary');

const Schema = mongoose.Schema;

//create Diaries collection on mongodb which contains all the diaries data
const DiarySchema = new Schema({
  date: String,
  body: String
});
const Diaries = mongoose.model('Diaries', DiarySchema);

//create Weathers collection on mongodb which contains all the weather data
const WeatherSchema = new Schema({
  messageType: String,
  messageID: String,
  messageURL: String,
  messageIssueTime: String,
  messageBody: String
});
const Weathers = mongoose.model('Weathers', WeatherSchema);

//create Images collection on mongodb which contains all the image data
const ImageSchema = new Schema({
  camera: String,
  imgURL: String,
  date: String
})
const Images = mongoose.model('Images', ImageSchema);

//create Users collection on mongodb which contains all the users data
const UsersSchema = new Schema({
  name: String,
  password: String
});
const Users = mongoose.model('Users', UsersSchema);

module.exports = {
  saveDiary: ({ date, body }, cb) => {
    //save the passed in data to Diaries model inside mongodb, then invoke a cb
    //fill out later when data is defined on both client and server side
    Diaries.findOneAndUpdate({body}, {date, body}, {upsert: true})
      .then(cb)
      .catch(err => {
        console.error(err);
      })
  },

  saveWeather: (data, cb) => {
    var promises = [];
    data.forEach(obj => {
      [messageType, messageID, messageURL, messageIssueTime, messageBody] = [obj.messageType, obj.messageID, obj.messageURL, obj.messageIssueTime, obj.messageBody];
      promises.push(Weathers.findOneAndUpdate({messageURL}, {messageType, messageID, messageURL, messageIssueTime, messageBody}, {upsert: true}));
    });
    Promise.all(promises).then(() => {
      cb();
    }).catch(err => {
      console.error(err);
    })
  },

  readDiaries: (cb) => {
    Diaries.find({}).then((data) => {
      cb(data);
    })
  },

  addNewUser: ({ name, password}, cb) => {
    Users.find({ name })
      .then(data => {
        if (data.length > 0) {
          cb('user already exists!')
        } else {
          Users.create({ name, password })
            .then(() => {
              console.log('new user created');
              cb(null);
            })
        }
      })
  },

  validateUsernamePassword: ({ name, password }, cb) => {
    Users.find({name, password})
      .then(data => {
        if (data.length === 0) {
          cb('wrong username or password')
        } else {
          cb(null);
        }
      })
  }

}

