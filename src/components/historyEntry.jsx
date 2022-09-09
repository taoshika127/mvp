import React from 'react';

class HistoryEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>{this.props.data.date}</p>
        <p>{this.props.data.body}</p>
      </div>
    )
  }
}

export default HistoryEntry;