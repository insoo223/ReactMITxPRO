import React from 'react'
import ReactDOM from 'react-dom'
import {TodoForm} from './form' // import user-defined function

//React function name must begin with capital letter.
function ListApp(){
  /*** Initialize to-do list ***
  useState React Hook creates and returns two parameters.
  1.State array variable "todos" for initial to-do list. 
    Each to-do list is an object (a composite value) of text and isCompleted.
    About JS object see p129, JavaScript: The definitie guide, 7th ed.
  2.Set function "setTodos" ***/

  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);//const [todos, setTodos]

  /*** Initialize input field ***
  useState React Hook creates and returns two parameters.
  1.State array variable "value" to contain input text.
  2.Set function or manipulator "setValue" ***/

  const [value, setValue] = React.useState('');

  /*** Function declaration to add To-Do item ***
  1.Get the text of to-be-added item for to-do list: todoText
  2.Append the input text(text is "todoText" parameter and it's not yet completed) to the to-do list "todos": const newTodos = [...todos, {text:todoText, isCompleted:false}];
  3.Update the "todos" state array variable: setTodos(newTodos); ***/

  const addTodo = todoText => {
    const newTodos = [...todos, {text:todoText, isCompleted:false}];
    setTodos(newTodos);
  }//const addTodo

  /*** Function declaration to remove clicked to-do item ***
  1.Get the id or index of clicked item: var index = Number(e.target.id);
  2.Spread "todos" state array variable and save to "temp": let temp = [...todos]; 
    To manipulate array element, we need to SPREAD an array otherwise JS deals array as a whole entity.
  3.Remove element whose index is "index" from "temp": temp.splice(index, 1);
  4.Update the "todos" state array variable: setTodos(temp); ***/

  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }//const removeTodo

  /*** Display to-do list ***
   
      {todos.map((todo, i) => 
        <div className="todo" key={i}>{todo.text}</div>)}

  1.Each element of the state array variable "todos"-which contains initial to-do list assigned by useState React Hook- creates HTML list by creating <div> </div> tag.
  2.Each item of the list 
    A.is styled by "todo" class defined in CSS style sheet: className="todo"
    B.has display item index taken from the array index of "totos": key={i}
    C.has clicked item index taken from the array index of "totos": id={i}
        If you omit id={i} and use key for removeTodo function, it does not work correctly. The list items order is not recognized, only the top-most item will be removed by each click.
    D.has onClick event function: onClick={removeTodo}
    E.has to-do string taken from the "text" part of "todo". "todo" is "todos" array's element: {todo.text} ***/
  
  /*** Add to-do list by input field  ***
  1.Call TodoForm function whose clickAddTodo parameter is addTodo function ***/
  return(
      <>
      {todos.map((todo, i) => 
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}

      <TodoForm clickAddTodo={addTodo}/>
    </>
  );//return
};//ListApp

ReactDOM.render(<ListApp/>,document.getElementById('root'));
