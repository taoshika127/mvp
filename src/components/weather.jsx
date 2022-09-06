import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Today's weather is: </p>
        <p>Weather on Human Earth is: </p>
      </div>
    )
  }
}

export default Weather;