/** React Docs-Introducing JSX
 * Ref: https://reactjs.org/docs/introducing-jsx.html
 */
//리액트 문서오브젝트모델(react-dom)이 렌더링 엔진 모듈
import ReactDOM from 'react-dom'; 

const name = '김인수';

//아래 문장은 문자열도 아니고, HTML도 아니다. 재밌다! 
//이는 JSX로 구성된 리액트 요소(element) 사례.
//JSX는 자바스크립트의 확장 문법. 아래에서 변수를 중괄호에 감싸면, 렌더링 시 그 값이 대입됨.
const element = <h1>Hello,{name}</h1>;

/** document.getElementById('root')는 웹 DOM의 리액트 확장판
 * 요약: 
 * 1.웹 문서 오브젝트 모델(웹돔)이란 구조 및 내용으로 이뤄진 웹문서 오브젝트 데이터 모델링(표현)을 의미.
 * 
 * 2.HTML 및 XML 프로그래밍 인터페이스
 * 3.웹 문서 구조, 스타일 및 내용을 프로그래밍으로 변경하기 위한 웹 페이지 표상.
 * 4.웹 문서를 노드와 오브젝트로 표현해서 프로그래밍 언어가 웹 페이지를 연결할 수 있음.
 * 5.결국, API = DOM + JavaScript
 * 참조
 * 1.웹돔: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
 **/
ReactDOM.render(
  element,
  document.getElementById('root')
);
