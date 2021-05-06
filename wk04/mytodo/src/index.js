import React from 'react'
import ReactDOM from 'react-dom'

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

  /*** Function declaration to submit input form ***
  1.Prevent default action of submit (i.e. send input field to shme where): e.preventDefault();
  2.None is filled then exit the function: if (!value) return; 
  3.Append the input text(text is "value" state and it's not yet completed) to the to-do list "todos": const newTodos = [...todos, {text:value, isCompleted:false}];
  4.Update the "todos" state array variable: setTodos(newTodos);
  5.Re-initialize the value state variable: setValue(''); ***/
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted:false}];
    setTodos(newTodos);
    setValue('');
  }//const handleSubmit

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
    E.has to-do string taken from the "text" part of "todo". "todo" is "todos" array's element: {todo.text}
  
  *** Input box for adding to-do list ***
  1.Execute the handleSubmit function when a form is submitted
  2.The form has input field which 
    A.is text type: type="text"  
    B.is styled by "input" class defined in CSS style sheet: className="input"
    C.has value taken from the state variable "value" created by useState React Hook
    D.has default string: placeholder="Add Todo..."
    E.has onChange event handler updating the "value" state by calling "setValue" state manipulator: onChange={e => setValue(e.target.value)} ***/
  return(
      <>
      {todos.map((todo, i) => 
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
      
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
};//ListApp

ReactDOM.render(<ListApp/>,document.getElementById('root'));
