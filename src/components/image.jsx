import React from 'react';
const axios = require('axios');

class SpaceImage extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit() {
    axios.get('http://localhost:3000/image')
      .then((response) => {
        var url = response.data;
        this.props.onSubmit(url);
      })
      .catch(err => {
        console.error(err);
      })

  }

  render() {
    return (
      <div>
        <button id="marsImage" onClick={this.handleSubmit.bind(this)}>Generate a random image from space!</button>
      </div>
    )
  }
}

export default SpaceImage;