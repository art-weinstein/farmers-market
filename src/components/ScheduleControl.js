import React from 'react';
// import ProduceList from './ProduceList';
// import ScheduleList from './ScheduleList';

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainScheduleList : [],
      selectedDay: 'Choose Day'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({selectedDay: event.target.value});
    this.setState({mainScheduleList: this.state.mainScheduleList.find(element => element.day === event.target.value).day});
  }

  // handleSubmit(event){
  //   this.setState({})
  // }
  
  componentDidMount(){
    this.setState({
      mainScheduleList : [  
        {  
          day: "Sunday",
          location: "Lents International",
          hours: "9:00am - 2:00pm",
          booth: "4A"
        },
        {  
          day: "Monday",
          location: "Pioneer Courthouse Square",
          hours: "10:00am - 2:00pm",
          booth: "7C"
        },
        {  
          day: "Tuesday",
          location: "Hillsboro",
          hours: "5:00pm - 8:30pm",
          booth: "1F"
        },
        {  
          day: "Wednesday",
          location: "Shemanski Park",
          hours: "10:00am - 2:00pm",
          booth: "3E"
        },
        {  
          day: "Thursday",
          location: "Northwest Portland",
          hours: "2:00pm - 6:00pm",
          booth: "6D"
        },
        {  
          day: "Saturday",
          location: "Beaverton",
          hours: "10:00am - 1:30pm",
          booth: "9G"
        }
      ]
    });
  }


  render(){
    return (
      <form>
        <label>Pick the Day:</label>
        <select value={this.state.selectedDay} onChange={this.handleChange}>
          <option>Choose Day</option>
						{this.state.mainScheduleList.map((e, key) => {
							return <option key={key}>{e.day}</option>;
						})}
        </select>
        <span>{}</span>
        </form>    
      
      );
    }
}

export default ScheduleControl;