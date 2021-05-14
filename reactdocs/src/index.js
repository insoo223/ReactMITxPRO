/** React Docs-Introducing JSX:Embed ft. return
 * Ref: https://reactjs.org/docs/introducing-jsx.html
 */
//리액트 문서오브젝트모델(react-dom)이 렌더링 엔진 모듈
import ReactDOM from 'react-dom'; 

function formatName(person) {
  return person.firstName + ' ' + person.lastName;
}

const user = {
  firstName: 'Insoo',
  lastName: 'Kim'
}

//JSX에 함수 결과값을 받게, JSX에서 중괄호 안에 어떤 JS표현이라도 가능.
//가독성 위해 여러 줄에 걸쳐 표현하고, JSX를 괄호로 감싸는 게 좋다.
const element = (
<h1>
  Hello,{formatName(user)}
</h1>
);

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
