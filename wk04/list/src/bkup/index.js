import React from 'react'
import ReactDOM from 'react-dom'
import {TodoForm} from './form'
import {Todo} from './todo'

function App(){
  const predefinedToDO = [
    {
      text: 'Learn react(리액트 학습)',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch(친구와 점심)',
      isCompleted: false,
    },
    {
      text: 'Build todo app(할일 앱 작성)',
      isCompleted: false,
    }        
  ];
  const [todos, setTodos] = React.useState(predefinedToDO);
  
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
    <div className="app2">
      <div className="todo-list">
        {todos.map((todo, i) => 
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>)}
          <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );//return
};//App

ReactDOM.render(<App/>,document.getElementById('root'));
