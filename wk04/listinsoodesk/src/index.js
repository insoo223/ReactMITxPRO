import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactBootstrap from 'react-bootstrap'

// use of "props" to set data
function NavBar(props) {
  const list = props.menuitems;
  const { Button } = ReactBootstrap;
  
  console.log('Insoo\'s list rendering ');
  // each item should have an unique key
  const updatedList = list.map((item, index) => {
    //log msg will be called 5 times at run-time.
    //This is not called by onClick event but only called onece per web page loading
    console.log('hi, insoo');
    return(
    <>
      <Button key={index}>{item}</Button>
    </>)
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuSrc = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuSrc}/>,
  document.getElementById("root")
);
