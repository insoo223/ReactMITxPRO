import React from 'react'
  
export function TodoAddForm({clickAddTodo}){
  const [value,setValue] = React.useState('');
  
  /*** Function declaration to submit input form ***
  1.Prevent default action of submit (i.e. send input field to shme where): e.preventDefault();
  2.None is filled then exit the function: if (!value) return; 
  3.Call clickAddTodo function to append the input text of "value" state": clickAddTodo(value);
  4.Re-initialize the value state variable: setValue(''); ***/
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    clickAddTodo(value);
    setValue('');
  }//const handleSubmit

  /*** Input box for adding to-do list ***
  1.Execute the handleSubmit function when a form is submitted
  2.The form has input field which 
    A.is text type: type="text"  
    B.is styled by "input" class defined in CSS style sheet: className="input"
    C.has value taken from the state variable "value" created by useState React Hook
    D.has default string: placeholder="Add Todo..."
    E.has onChange event handler updating the "value" state by calling "setValue" state manipulator: onChange={e => setValue(e.target.value)} ***/

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )//return
}//export function TodoAddForm