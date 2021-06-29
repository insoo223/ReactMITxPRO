function Deposit(){
  const {deposit, setDeposit} = React.useState('');
  const {show, setShow} = React.useState(true);
  const {status, setStatus} = React.useState('');

  return (
    <Card
      bgcolor="Success"
      header="Deposit"
      status={status}
      body={show ? (
        <>
        </>
      ):(
        <>
        </>
      )}
    />
  )
}
