//import React from 'react';

export function LoginButton (props)
{
  //리턴문에는 여는 괄호가 같은 줄에 있어야 한다.(2021.5.19 수 디버깅에 한시간 소요-_-)
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}//LoginButton

export function LogoutButton (props)
{
  //리턴문에는 여는 괄호가 같은 줄에 있어야 한다.(2021.5.19 수 디버깅에 한시간 소요-_-)
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}//LogoutButton
