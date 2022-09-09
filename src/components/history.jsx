import React from 'react';
import HistoryEntry from './historyEntry.jsx';

class History extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="history">
        <p>History Logs: </p>
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