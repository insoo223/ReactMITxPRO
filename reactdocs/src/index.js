/** React Docs-Conditional Rendering: Success code w/bind, Welcome msg & button 
 * Ref: https://reactjs.org/docs/conditional-rendering.html 
 */
//리액트 문서오브젝트모델(react-dom)이 렌더링 엔진 모듈
import React from 'react';
import ReactDOM from 'react-dom'; 
import Greeting from './greeting'
import {LoginButton, LogoutButton} from './logButtons';
class LoginCtrl extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }//constructor

  /*
  handleLoginClick = () =>
  {
    this.setState
    ( 
      {isLoggedIn: true}
    )
  }//handleLoginClick
  */
  
  //bind at contructor required
  handleLoginClick()
  {
    this.setState
    ( 
      {isLoggedIn: true}
    )
  }//handleLoginClick

  /*
  handleLogoutClick = () =>
  {
    this.setState
    ( 
      {isLoggedIn: false}
    )
  }//handleLogoutClick
  */
 
  //bind at contructor required
  handleLogoutClick()
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
    
    return (
      <div>
        <Greeting isLoggedIn={curLogState}/>
        {button}
      </div>
    )//return
  }//render
}//LoginCtrl

ReactDOM.render(<LoginCtrl />, document.getElementById('root') );
