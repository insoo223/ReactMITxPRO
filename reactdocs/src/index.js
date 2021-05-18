/** React Docs-State and Lifecycle:tick() Three Indep. Components
 * Ref: https://reactjs.org/docs/state-and-lifecycle.html
 */
//리액트 문서오브젝트모델(react-dom)이 렌더링 엔진 모듈
import React from 'react';
import ReactDOM from 'react-dom'; 

/*
function Clock(props) {
  return(
    <div>
      <h1>Hello,World!</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );//return
}//Clock
*/

//class component for Clock using state
class Clock extends React.Component {
  constructor(props) {
    super(props);
    //필요한 상태는 "생성자"에서 선언된다.
    this.state = {date: new Date()};
  }//constructor

  //생성자와 ReactDOM.render()이후 3번째로 실행
  componentDidMount() {
    //매 초 틱함수 호출
    this.timerID = setInterval //timerID는 임의로 붙인 속성
    ( () =>
      this.tick(), 1000
    );//setInterval
  }//componentDidMount

  componentWillUnmount() {
    clearInterval(this.timerID)
  }//componentWillUnmount

  //틱 함수는 상태설정(setState)을 통해 date 상태 갱신
  //상태갱신되면 리액트 돔은 자동으로 렌더링 즉, 렌더러 자동 호출 
  tick() {
    this.setState
    ( 
      {
        date: new Date() // 세미콜론(;) 넣으면 안됨. 쉼표 가능
      }
    );//setState
  }//tick

  render() {
    return(
      <div>
        <h1>Hello,Insoo!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );//return
  }//render
}//Clock

function App() {
  return (
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  );//return
}//App

/** ReactDOM()은 React element의 변화된 부분만 인식해서 새로운 React element를 생성, 갱신
 * 요약: 
 * 1.React element는 root DOM node (html화일의  <div id="root"></div> 부분)에서 렌더링됨
 * 2.ReactDOM.render()함수에 React element와  root  DOM node를 전달하면 끝.
 * 3.React element는 렌더된 후 바뀌지 않음(immutable). 따라서, 새로운 React element를 생성해야하는데, React DOM은 React element에서 변화된 부분만 골라내어 새로운 React element를 생성 및 렌더링 한다.
 * 4.사람은 시간변화에 대해 생각하지 않고, “한 시점에서 웹 페이지가 어떻게 보여야 함”만 고려하면 된다. 변화관리는 React DOM이 한다. 물론, 변화기제 즉 시간 tick발생기 등은 코더가 제공
 * 5.다시말해, React element의 어떤 부분이 어떻게 바꾸었는지 판단하고 가장 최소 메모리와 컴퓨팅 비용을 들여서 렌러링 로직을 작성해 실행하는 것은 React DOM의 몫이다.
 
 * 참조
 * 1.React: Rethinking best practice by Pete Hunt (JSConf EU 2013)
 * https://www.youtube.com/watch?v=x7cQ3mrcKaY 
 **/
ReactDOM.render(<App/>, document.getElementById('root') );
