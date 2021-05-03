import React from 'react'
import ReactDOM from 'react-dom'
import {TodoForm} from './form'
import {Todo} from './todo'

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
  
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }//const removeTodo

  return(
    <>
      {todos.map((todo, i) => 
        <Todo key={i} index={i} todo={todo} remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo}/>
    </>
  );//return
};//App

ReactDOM.render(<App/>,document.getElementById('root'));
