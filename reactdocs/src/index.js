/** React Docs-components and props: Default App() ft.component
 * Ref: https://reactjs.org/docs/components-and-props.html
 */
//리액트 문서오브젝트모델(react-dom)이 렌더링 엔진 모듈
import React from 'react';
import ReactDOM from 'react-dom'; 

//함수 콤포. 
//콤포는 대문자로 시작. html DOM 태그는 소문자로 시작.
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
};//Welcome

//(관습적으로) 기본 함수 콤포: App()
function App() {
  return(
    <div>
    <Welcome name="Insoo"/>
    <Welcome name="Jay"/>
    <Welcome name="Steve"/>
  </div>
  );
};//App

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
