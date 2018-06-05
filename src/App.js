import React, { Component } from 'react';
// import the stylesheet for the project
import './App.css';
// import the stateless functional component describing the clock
import Clock from './Clock';

class App extends Component {
  // render the clock component in a nesting div
  render() {
    return (
      <div id="app">
        <Clock />
      </div>
    );
  }
}

export default App;
