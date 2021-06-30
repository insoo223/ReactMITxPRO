function Withdraw(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [withdraw, setWithdraw] = React.useState(0);
  const ctx = React.useContext(UserContext);
  
  function clearForm(){
    console.log('Balance: ' + ctx.users[0].balance);
    setWithdraw('');
    setShow(true);
  }//clearForm

  function validate(field){
    let curBal;
    let afterWithdraw;
    curBal = Number(ctx.users[0].balance);
    afterWithdraw = curBal - Number(field);
    if(afterWithdraw<0){
      setStatus('Error: overdraft');
      alert(`You\'re trying to overdraft.\nPlease, enter amount equal or less than ${curBal}.`);
      setTimeout(() => setStatus(''),2000);
      return false;
    }
    else if (isNaN(field)) {
      setStatus('Error: withdraw number');
      alert('You\'ve entered character(s).\nPlease, enter number greater than 0 .');
      setTimeout(() => setStatus(''),2000);
      return false;
    }
    return true;
  }//validate

  function handleWithdraw(){
    console.log('withdrawed: ' + withdraw);
    if (!validate(withdraw))
      return;
    ctx.users.slice(0);
    ctx.users[0].balance = Number(ctx.users[0].balance) - Number(withdraw);;
    ctx.setUsers(ctx.users.slice(0));
    setWithdraw(0);
    setShow(false);
  }//handleWithdraw

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={show ? (
        <>
          <h3>Current balance: {ctx.users[0].balance} </h3>

          Amount<br/>
          <input type="input" className="form-control" id="amount" placeholder="$" data-toggle="tooltip" data-placement="top" title="Enter your withdraw amount, please." onChange={e => {setWithdraw(e.currentTarget.value)}} 
          /><br/>

          <button id="withdraw" disabled={!withdraw} type="submit" className="btn btn-light" data-toggle="tooltip" data-placement="top" title="Before withdraw cash, check again your withdraw amount, please." onClick={handleWithdraw}>Confirm Withdraw</button>        
        </>
      ):(
        <>
          <h3>Current balance: {ctx.users[0].balance}</h3>
          <h5>Your withdraw has been successfully processed!</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another withdraw</button>
        </>
      )}
    />
  )
}
