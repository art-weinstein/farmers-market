import React from 'react';
import ScheduleControl from './ScheduleControl';
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Farmer's Market</h1>
        <hr />
        <ScheduleControl />
      </div>
    </React.Fragment>
  );
}

export default App;
