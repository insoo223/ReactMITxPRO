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
      setDeposit(0);
      return false;
    }
    else if (isNaN(field)) {
      setStatus('Error: deposit number');
      alert('You\'ve entered character(s).\nPlease, enter number greater than 0 .');
      setTimeout(() => setStatus(''),2000);
      setDeposit(0);
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
      header="DEPOSIT"
      status={status}
      body={show ? (
        <>
          <h3>BALANCE: {ctx.users[0].balance.toFixed(2)} </h3>

          DEPOSIT AMOUNT<br/>
          <input type="input" className="form-control" id="amount" placeholder="" data-toggle="tooltip" data-placement="top" title="Enter your deposit amount, please." onChange={e => {setDeposit(e.currentTarget.value)}} 
          /><br/>
          <div class="col-md-12 text-center">
            <button id="deposit" type="submit" disabled={!deposit} className="btn btn-light" data-toggle="tooltip" data-placement="top" title="Before deposting, check again your deposit amount, please." onClick={handleDeposit}>DEPOSIT</button>   
          </div>     
        </>
      ):(
        <>
          <h3>BALANCE:{ctx.users[0].balance.toFixed(2)} </h3>
          <h5>Your deposit has been successfully processed!</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
        </>
      )}
    />
  )
}
