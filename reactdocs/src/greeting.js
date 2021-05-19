import {LoginButton, LogoutButton} from './logButtons';

function UserGreeting (props)
{
  return <h1>Welcome Back!</h1>;
}//UserGreeting

function GuestGreeting (props)
{
  return <h1>Please sign up.</h1>;
}//GuestGreeting

export default function Greeting (props)
{
  const logState = props.isLoggedIn;
  if (logState)
    { 
        return <UserGreeting/>;
    }
  else  
    { 
        return <GuestGreeting/>; 
    }
}//Greeting
