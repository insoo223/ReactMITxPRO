import React from 'react'
import ReactDOM from 'react-dom'

function App(){
  /*** initial to-do list ***
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

  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted:false}];
    setTodos(newTodos);
    setValue('');
  }//const handleSubmit

  return(
  /*** Display to-do list ***
   
      {todos.map((todo, i) => 
        <div className="todo" key={i}>{todo.text}</div>)}

  1.Each element of the state array variable "todos"-which contains initial to-do list assigned by useState React Hook- creates HTML list by creating <div> </div> tag.
  2.Each item of the list 
    A.is styled by "todo" class defined in CSS style sheet: className="todo"
    B.has index taken from the array index of "totos": key={i}
    C.has to-do string taken from the "text" part of "todo". "todo" is "todos" array's element: {todo.text}
  
  *** Input box for adding to-do list ***
  1.Execute the handleSubmit function when a form is submitted
  2.The form has input field which 
    A.is text type: type="text"  
    B.is styled by "input" class defined in CSS style sheet: className="input"
    C.has value taken from the state variable "value" assigned by useState React Hook
  ***/
  <>
      {todos.map((todo, i) => 
        <div className="todo" key={i}>{todo.text}</div>)}

      <form onSubmit={handleSubmit}>
        <input
            type="text" 
            className="input" 
            value = {value}
            placeholder="Add Todo..."
            onChange={e => setValue(e.target.value)}>
        </input>
      </form>
      
    </>
  );//return
};//App

ReactDOM.render(<App/>,document.getElementById('root'));
