import React from 'react';

// create a component for SVG syntax describing a curvy clock hand, starting from the hollow circle and leading up to the edges of a supposedly outer circle (that'll never be designed, but which can be visualized at the edges of the viewbox for the SVG) 
// pass properties as the argument of the functional component
// rotate the path element and alter its stroke-width depending on the values passed from the parent component. Parent component which passes as attributes the value of transformRotate and strokeWidth
const ClockHand = (props) => {
    return (<path transform={props.transformRotate} id="seconds" d="M 50 40 A 10 10 0 0 1 40 30 A 10 10 0 0 1 46 23 A 10 10 0 0 0 52 15 A 10 10 0 0 1 56 14 A 10 10 0 0 0 52 10 A 10 10 0 0 0 48 14 A 10 10 0 0 1 52 15" stroke="#61dafb" strokeWidth={props.strokeWidth} fill="none"/>);
};

export default ClockHand;