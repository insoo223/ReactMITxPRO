function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  
  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (
        <>
          Deposit Amount<br/>
          <input type="input" className="form-control" id="amount" placeholder="Amount" value={deposit} data-toggle="tooltip" data-placement="top" title="Enter your deposit amount, please." onChange={e => {setDeposit(e.currentTarget.value)}} 
          /><br/>
        </>
      ):(
        <>
        </>
      )}
    />
  )
}
