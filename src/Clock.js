import React from 'react';
// import two functional stateless components describing the clock's hand and the center of the same
import ClockHand from './ClockHand';
import InnerCircle from './InnerCircle';

// create a react component
class Clock extends React.Component {
    constructor(props) {
      super(props);
      // set state for an instance of the date object
      this.state = {
        date : new Date()
      };
    }
    // when the component is mounted/ created in the page, initialize an interval, which runs a function every second
    // this.timerID represents a new field in the class, which is referrable elsewhere in the component
    // this.tick refers to a function, which needs to be instantiated/ created in the class component, prior to the render method
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    // when the component is unmounted/ eventually destroyed, remove the interval
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    // define the functionality of the tick function
    // function which updates the state storing a date object in the defined key of 'date'
    // as the function is called every second, a different date object will be stored in the state
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      // store in three variables the 1) seconds 1) minutes 1) hours from the date object
      let seconds = this.state.date.getSeconds();
      let minutes = this.state.date.getMinutes();
      let hours = this.state.date.getHours();
  
      // store in three variables the string of 'rotate(x)', where x is the number of degrees the clock hands should be rotated
      // degrees range: [0-360]
      // seconds and minutes range: [0-60] => normalized by multiplying each variable by 6
      // hours range: [0-12] => normalized by multiplying the variable by 30
      let rotateSec = `rotate(${seconds*6})`;
      let rotateMin = `rotate(${minutes*6})`;
      let rotateHou = `rotate(${hours*30})`;
  
        // return a single SVG element with a viewbox attribute on which the path elements are built
        // in the SVG element, nest the circle and three instances of the component for the clock hands
        // to each pass as properties the 1) rotation the hand needs to assume and 1) the width of the stroke for path element 
      return(
        <svg viewBox="0 0 100 100">
          <InnerCircle/>
          <ClockHand transformRotate={rotateSec} strokeWidth=".75"/>
          <ClockHand transformRotate={rotateMin} strokeWidth="1"/>
          <ClockHand transformRotate={rotateHou} strokeWidth="1.5"/>
        </svg>
      );
    }
  };


export default Clock;