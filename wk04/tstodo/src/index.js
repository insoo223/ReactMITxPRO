import React from 'react'
import ReactDOM from 'react-dom'
import {TodoForm} from './form'

function App(){
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

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }

  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }//const removeTodo

  return(
    <>
      {todos.map((todo, i) => 
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
      )}
      <TodoForm addTodo={addTodo}/>
    </>
  );//return
};//App

ReactDOM.render(<App/>,document.getElementById('root'));
