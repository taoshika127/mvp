import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './components/weather.jsx';
import MarsImage from './components/image.jsx';
import Diary from './components/diary.jsx';
import History from './components/history.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {mars: '', earth: ''},
      image: '',
      history: []
    }
  }

  render() {
    return (
      <div>
        <h1>Life On Mars</h1>
        <Weather data={this.state.weather}/>
        <MarsImage data={this.state.image}/>
        <Diary />
        <History data={this.state.history}/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
