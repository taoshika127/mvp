import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './components/weather.jsx';
import SpaceImage from './components/image.jsx';
import Diary from './components/diary.jsx';
import History from './components/history.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      history: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/weather')
      .then((response) => {
        this.setState({weather: response.data});
      });
    axios.get('http://localhost:3000/diaries')
      .then((response) => {
        this.setState({history: response.data})
      });
  }

  getImage(url) {
    document.body.style.backgroundImage = 'url(' + url + ')';
  }

  getDiaries(data) {
    this.setState({history: data});
  }

  render() {
    return (
      <div id="app">
        <h1>Space Log</h1>
        <SpaceImage onSubmit={this.getImage.bind(this)}/>
        <Weather data={this.state.weather}/>
        <Diary onSubmit={this.getDiaries.bind(this)}/>
        <History data={this.state.history}/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//style={{backgroundImage: 'url(' + this.state.image + ')', backgroundSize: '100%'}}