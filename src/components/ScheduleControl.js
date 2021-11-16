import React from 'react';
import ProduceList from './ProduceList';
import ScheduleList from './ScheduleList';

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handlClick = this.handleClick.bind(this);
  }

  handleClick = () =>{
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <ProduceList />;
      buttonText = "Back to schedule";
    } else {
      currentlyVisibleState = <ScheduleList />;
      buttonText = "View seasonal produce";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
      );
    }
}

export default ScheduleControl;