function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState(0);
  const ctx = React.useContext(UserContext);
  
  function clearForm(){
    console.log('Balance: ' + ctx.users[0].balance);
    setDeposit('');
    setShow(true);
  }//clearForm

  function validate(field){
    if(Number(field)<=0){
      setStatus('Error: deposit amount');
      alert('You\'ve entered negative number.\nPlease, enter amount greater than 0 .');
      setTimeout(() => setStatus(''),2000);
      return false;
    }
    else if (isNaN(field)) {
      setStatus('Error: deposit number');
      alert('You\'ve entered character(s).\nPlease, enter number greater than 0 .');
      setTimeout(() => setStatus(''),2000);
      return false;

    }
    return true;
  }//validate

  function handleDeposit(){
    let curBalance;

    ctx.users.slice(0);
    curBalance = ctx.users[0].balance;
    console.log('Deposited: ' + deposit);
    if (!validate(deposit))
      return;
    ctx.users[0].balance = Number(curBalance) + Number(deposit);
    ctx.setUsers(ctx.users.slice(0));
    setDeposit(0);
    setShow(false);
  }//handleDeposit

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (
        <>
          <h3>Current balance: {ctx.users[0].balance} </h3>

          Amount<br/>
          <input type="input" className="form-control" id="amount" placeholder="$" data-toggle="tooltip" data-placement="top" title="Enter your deposit amount, please." onChange={e => {setDeposit(e.currentTarget.value)}} 
          /><br/>

          <button id="deposit" type="submit" disabled={!deposit} className="btn btn-light" data-toggle="tooltip" data-placement="top" title="Before deposting, check again your deposit amount, please." onClick={handleDeposit}>Confirm Deposit</button>        
        </>
      ):(
        <>
          <h3>Current balance: {ctx.users[0].balance}</h3>
          <h5>Your deposit has been successfully processed!</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
        </>
      )}
    />
  )
}
