import React from 'react'

/*** Display to-do list ***
   
      {todos.map((todo, i) => 
        <TodoShowAndClick key={i} todoItemID={i} todoItem={todo} clk2removeFunc={removeTodo}/>)}

  1.Each element of the state array variable "todos"-which contains initial to-do list assigned by useState React Hook- call TodoShowAndClick React component (function) to creates HTML list by creating <div> </div> tag.
  2.Each item of the list 
    A.is styled by "todo" class defined in CSS style sheet: className="todo"
    B.has display item index taken from the array index of "totos": key={i}
    C.has clicked item index taken from the array index of "totos": id={i}
        If you omit id={i} and use key for removeTodo function, it does not work correctly. The list items order is not recognized, only the top-most item will be removed by each click.
    D.has onClick event function: onClick={removeTodo}
    E.has to-do string taken from the "text" part of "todo". "todo" is "todos" array's element: {todo.text} ***/
export function TodoDispAndRemove({todoItem,todoItemID,clk2removeFunc}){
  function onClickHandler(){
    console.log('Ping:',todoItemID);
    clk2removeFunc(todoItemID);
  }
  return <div className="todo" onClick={onClickHandler}>{todoItem.text} (-)</div>
}//TodoDispAndRemove
