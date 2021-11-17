import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return(
    <React.Fragment>
          <h3>{props.location}: {props.day}</h3>
          <p>Open from: {props.hours}</p>
          <p>Booth #{props.booth}</p>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours:  PropTypes.string,
  booth:  PropTypes.string
}

export default Schedule;
