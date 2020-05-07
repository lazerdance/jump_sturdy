import React from 'react';

import './board.css';

export default function Square(props) {
      
    return (
      <button className={"square " + props.shade}
      onClick={props.onClick}
      style={props.style}>
       
      </button>
    );  
}