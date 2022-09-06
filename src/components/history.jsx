import React from 'react';
import HistoryEntry from './historyEntry.jsx';

class History extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>History: </p>
        {this.props.data.map((entry, index) => {
          return (
            <div key={index}>
              <HistoryEntry data={entry}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default History;