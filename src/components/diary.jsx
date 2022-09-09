import React from 'react';
const axios = require('axios');
const { todaysDate } = require('../../dateHelper.js');

class Diary extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit (e) {
    e.preventDefault();
    var date = todaysDate();
    var body = document.getElementById('diary').value;
    axios.post('http://localhost:3000/diaries', {date, body})
      .then((response) => {
        this.props.onSubmit(response.data);
        document.getElementById('diary').value = '';
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <textarea id="diary" name="diary" rows="7" cols="100" placeholder="Please input your today's observation here."></textarea>
        <br />
        <button id="diary" onClick={this.onSubmit.bind(this)}>Save</button>
      </div>
    )
  }
}

export default Diary;