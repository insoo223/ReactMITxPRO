import React from 'react'
import ReactDOM from 'react-dom'
import {TodoAddForm} from './addForm' // import user-defined function
import {TodoDispAndRemove} from './dispAndRemove' // import user-defined function

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
  1.Get the index of clicked item: insooKey
    The index seems to be known automatically when dealing with Array map() function in JS.
  2.Spread "todos" state array variable and save to "temp": let temp = [...todos]; 
    To manipulate array element, we need to SPREAD an array otherwise JS deals array as a whole entity.
  3.Remove element whose index is "index" from "temp": temp.splice(index, 1);
  4.Update the "todos" state array variable: setTodos(temp); ***/

  const removeTodo = insooKey => {
    let temp = [...todos];
    temp.splice(insooKey, 1);
    setTodos(temp);
  }//const removeTodo

  /*** Display and Remove to-do list ***
   
      {todos.map((todo, i) => 
        <TodoShowAndClick key={i} todoItemID={i} todoItem={todo} clk2removeFunc={removeTodo}/>)}

  1.Each element of the state array variable "todos"-which contains initial to-do list assigned by useState React Hook- call TodoShowAndClick React component (function) to creates HTML list.
  2.Following attributes are accessible to TodoShowAndClick component
    A.The display item index taken from the array index of "totos": key={i}
    B.The clicked item index taken from the array index of "totos": todoItemID={i}
    C.The to-do item: todoItem={todo}
    D.The clk2removeFunc parameter: clk2removeFunc={removeTodo} ***/
  
  /*** Add to-do list by input field  ***
  1.Call TodoForm function whose clickAddTodo parameter is addTodo function ***/
  return(
      <>
      {todos.map((todo, i) => 
        <TodoDispAndRemove key={i} todoItemID={i} todoItem={todo} clk2removeFunc={removeTodo}/>)}

      <TodoAddForm clickAddTodo={addTodo}/>
    </>
  );//return
};//ListApp

ReactDOM.render(<ListApp/>,document.getElementById('root'));
