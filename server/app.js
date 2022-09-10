const { getWeatherHandler, postHandler, getImageHandler, getDiariesHandler } = require('./requestHandler.js');
const express = require('express');
const session = require('express-session');
const html = require('html');
const path = require('path');
const bodyParser = require('body-parser');
const { addNewUser, validateUsernamePassword } = require('../db/database.js');

let port = 3000 || process.env.PORT;
const localHost = `http://localhost:${port}`;

const app = express();
app.use('/home', (req, res, cb) => {
  if (session.userId) {
    cb();
  } else {
    res.redirect('/login');
  }
}, express.static(path.join(__dirname + '/../dist')));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  secret: 'spacerocks',
  cookie: {
    maxAge: 3600000,
    sameSite: true,
  }
}))

app.get('/', (req, res) => {
  if (session.userId) {
    res.redirect('/home');
  } else {
    res.redirect('/login');
  }

})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/auth/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/auth/register.html'));
});

app.get('/logout', (req, res) => {
  session.userId = false;
  res.sendFile(path.join(__dirname, '../dist/auth/logout.html'))
});

app.post('/login', (req, res) => {
  var name = req.body.username;
  var password = req.body.password;
  validateUsernamePassword({ name, password }, (err) => {
    if (err) {
      console.error(err);
      res.send(`
      <p>The username and password you entered doesn't match our record. Please try again!</p>
      <br />
      <a href="/login">Login</a>
      <br />
      <a href="/register">Register</a>
      `)
    } else {
      session.userId = true;
      res.redirect('/home');
    }
  })
})

app.post('/register', (req, res) => {
  var name = req.body.username;
  var password = req.body.password;
  addNewUser({ name, password }, (err) => {
    if (err) {
      console.error(err);
      res.send(`
      <p>The username you entered already exists. Please login.</p>
      <br />
      <a href="/login">Login</a>
      `)
    } else {
      session.userId = true;
      res.redirect('/home');
    }
  })

})

app.get('/weather', getWeatherHandler);

app.get('/image', getImageHandler);

app.post('/diaries', postHandler);

app.get('/diaries', getDiariesHandler);


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})