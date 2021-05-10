const ATMDeposit = ({ onChange, isDeposit, mode, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATMDeposit isDeposit: ${isDeposit}`);
    console.log(`ATMDeposit mode: ${mode}`);
    console.log(`ATMDeposit isValid: ${isValid}`);
    
    return (
        mode && <div>
        <label className="label huge">
            <h3> {choice[Number(!isDeposit)]}</h3>
            <input id="number-input" type="number" width="200" onChange={onChange}></input>
            <input id="submit-input" type="submit" width="200" value="Submit"  disabled={!isValid} ></input>
        </label>
      </div>
    );//return
};//const ATMDeposit
  
const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState("");
    const [validTransaction, setValidTransaction] = React.useState(true);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);

    const handleChange = (event) => {
      setValidTransaction(false);
      if (event.target.value <= 0) return;
      if (atmMode == 'Cash Back') {
        if (event.target.value > totalState)
        {
            setValidTransaction(false);
            return;
        }
        else
          setValidTransaction(true);
      }
      else
        setValidTransaction(true);
      console.log(`handleChange ${event.target.value}`);
      setDeposit(Number(event.target.value));
    };//const handleChange event handler

    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;

      setTotalState(newTotal);

      if (atmMode == 'Deposit')
        setValidTransaction(true);  
      else if (atmMode == 'Cash Back')
      {
        if (newTotal >= 0)
            setValidTransaction(true);
        else
            setValidTransaction(false);
      }
      event.preventDefault();
    };//handleSubmit
  
    const handleModeSelect = (e) => {
        setAtmMode(e.target.value);
        //setIsDeposit(e.target.value == "Deposit" ? true : false)
        if (e.target.value != "")
            setIsDeposit(e.target.value == "Deposit");
    }//const handleModeSelect event handler

    return (
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>
        <label>Select an action below to continue</label>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>        
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit} mode={atmMode} isValid={validTransaction}></ATMDeposit>
      </form>
    );//return
};//Account
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  
