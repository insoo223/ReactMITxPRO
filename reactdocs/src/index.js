/** React Docs-Conditional Rendering: Error code, Welcome msg per user type
 * Ref: https://reactjs.org/docs/conditional-rendering.html I don't know why make an error as of May19, 2021.
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
  const logState = props.isLoggedIn;
  if (logState)
    { return <UserGreeting/>; }
  else  
    { return <GuestGreeting/>; }
}//Greeting

function LoginButton (props)
{
  return
  (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}//LoginButton

function LogoutButton (props)
{
  return
  (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}//LogoutButton

class LoginCtrl extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {isLoggedIn: false};
  }//constructor

  handleLoginClick = () =>
  {
    this.setState
    ( 
      {isLoggedIn: true}
    )
  }//handleLoginClick

  handleLogoutClick = () =>
  {
    this.setState
    ( 
      {isLoggedIn: false}
    )
  }//handleLogoutClick

  render()  
  {
    const curLogState = this.state.isLoggedIn;
    let button;
    if (curLogState)
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    else
      button = <LoginButton onClick={this.handleLoginClick}/>;
    
    return
    (
      <div>
        <Greeting isLoggedIn={curLogState}/>
        {button}
      </div>
    )//return
  }//render
}//LoginCtrl

ReactDOM.render(<LoginCtrl />, document.getElementById('root') );
