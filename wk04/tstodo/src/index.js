import React from 'react'
import ReactDOM from 'react-dom'

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
  ]);//const

  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted:false}];
    setTodos(newTodos);
    setValue('');
  }//const handleSubmit

  return(
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
