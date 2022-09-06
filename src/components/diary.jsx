import React from 'react';

class Diary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label htmlFor="diary">Diary</label>
        <textarea id="diary" name="diary" rows="15" cols="33" defaultValue="Please enter your diary here"></textarea>
        <button id="diary">Save</button>
      </div>
    )
  }
}

export default Diary;