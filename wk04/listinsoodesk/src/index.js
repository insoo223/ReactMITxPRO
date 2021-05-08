"use strict";

import React from 'react'
import ReactDOM from 'react-dom'

class OnClickElements extends React.Component {
  constructor() {
    //super allows you to use this in the constructor
    //to access and call functions on an object's parent.
    //https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
    super();
  }//constructor

  handleClick(event) {
    alert(`hey! you clicked: ${event.target.id}`);
  }//handleClick event handler

  /*** The only method you must define in a React.Component subclass is called render()
  In React components, code reuse is primarily achieved through composition rather than inheritance.
  https://reactjs.org/docs/react-component.html
  ***/
  render() {
    // TODO: Your task is to add onClick listeners to each of the elements within the container-div <div>
    // This is the only place you need to edit for this activity.
    /*** (Insoo commented May 8, 2021)
    The <span> tag is an inline container used to mark up a part of a text, or a part of a document.
    The <div> is a block-level element 
    https://www.w3schools.com/tags/tag_span.asp
    The <a> tag defines a hyperlink, which is used to link from one page to another.
    https://www.w3schools.com/tags/tag_a.asp
    ***/
    return (
      <div className="container-div">
        <div id="div-element" onClick={(e) => this.handleClick(e)}>I am DIV</div>

        <span id="span-element" onClick={(e) => this.handleClick(e)}>I am SPAN</span>
        <br></br>

        <button id="button-element" onClick={(e) => this.handleClick(e)}>I am Button</button>
        <br></br>

        <a id="link-element" href="" onClick={(e) => this.handleClick(e)}>
          I am LINK
        </a>

        <div id="div-element-2" className="button" onClick={(e) => this.handleClick(e)}>
          I am DIV
        </div>

        <span id="span-element-2" className="button" onClick={(e) => this.handleClick(e)}>
          I am SPAN
        </span>
        <br></br>

        <button id="button-element-2" className="button" onClick={(e) => this.handleClick(e)}>
          I am Button
        </button>
        <br></br>

        <a id="link-element-2" className="button" href="" onClick={(e) => this.handleClick(e)}> 
          I am LINK
        </a>
      </div>
    );//return
  }//render
}//class OnClickElements

ReactDOM.render(
  //Instantiate React class element
  React.createElement(OnClickElements),
  document.getElementById("root")
);//ReactDOM.render
