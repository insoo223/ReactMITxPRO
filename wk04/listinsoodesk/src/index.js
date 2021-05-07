import React from 'react'
import ReactDOM from 'react-dom'

const numbers = [1, 2, 3, 4, 5];

const updatedNums = numbers.map((number, index) => {
  return <li key={index.toString()}>{number*2}</li>;
});

ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById("root"));
//ReactDOM.render(<ol>{updatedNums}</ol>, document.getElementById("root"));
