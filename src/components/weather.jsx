import React from 'react';
const { processor } = require('./weatherDataProcessor.js')

class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Today's Date: {this.props.data.messageIssueTime?.slice(0, 10)}</p>
        <p>Today's Weather: </p>
        {processor(this.props.data.messageBody)?.map((sentence, index) => {
          return (
            <div key={index}>
              <p>{sentence}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Weather;