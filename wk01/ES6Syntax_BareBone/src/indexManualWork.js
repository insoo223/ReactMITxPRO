import React from 'react'
import ReactDOM from 'react-dom'

//React function name must begin with capital letter.
//function ES6syntaxApp(){
function App(){

  return(
    <div> 
      <h2>Hi, Insoo!</h2>
    </div>
  );//return
};//App

ReactDOM.render(<App/>,document.getElementById('root'));

export default App;
