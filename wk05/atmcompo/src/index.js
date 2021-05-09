import React from 'react'
import ReactDOM from 'react-dom'

/** Input field mgmt to deal with cash deposit 
 * This keeps a running total of deposits and withdrawals
 * 1.Amount to deposit by input field whose type is "number"
 * 2.Submit button by input field whose type is "submit"
 */
const ATMDeposit = ({onDepoChange}) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onDepoChange}></input>
      <input type="submit"></input>
    </label>
  );
};//const ATMDeposit

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  var deposit = 0;
  
  const handleDeopsitChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };//const handleDeopsitChange
  
  /**
   * Form submit event handler 
   * 1.Get newTotal by adding 
   *  accumulated "accountState" React Hook state variable with
   *  the current input field amount of "deposit" variable
   * 2.Update the accumulated "accountState" React Hook state variable by newTotal 
   * 3.Prevent the default action of submit i.e. reset the form information after submit
   */
  const handleSubmit = event => {
    let newTotal = accountState + deposit;
    alert(`Account total = ${newTotal}`);
    setAccountState(newTotal);
    event.preventDefault();
  };//const handleSubmit 

  /** Return of Account component
   * 1.Display account balance
   * 2.Input field mgmt to deal with cash deposit by "ATMdeposit" component
   */
  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance {accountState}</h2>
      <ATMDeposit onDepoChange={handleDeopsitChange}> Deposit</ATMDeposit>
    </form>
  );//return (of const Account)
};//const Account
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
