/** React Docs-Conditional Rendering: Welcome msg per user type
 * Ref: https://reactjs.org/docs/conditional-rendering.html
 */
//리액트 문서오브젝트모델(react-dom)이 렌더링 엔진 모듈
import React from 'react';
import ReactDOM from 'react-dom'; 

function UserGreeting (props)
{
  return <h1>Welcome Back!</h1>;
}//UserGreeting

function GuestGreeting (props)
{
  return <h1>Please sign up.</h1>;
}//GuestGreeting

function Greeting (props)
{
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn)
    { return <UserGreeting/>; }
  else  
    { return <GuestGreeting/>; }
}//Greeting

ReactDOM.render(<Greeting isLoggedIn={false}/>, document.getElementById('root') );
