function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        if (String(label) === 'password') {
        }
        else {
          setStatus('Error: ' + label);
          alert('Error: Please, enter non-blank ' + label);
          setTimeout(() => setStatus(''),1000);
          return false;
        }
      }
      
      if (String(label) === 'password') {
        console.log("pw field: " + String(field));
        if (field.toString().length < 8) {
          setStatus('Error: PW should be same or greater than 8 character long');
          alert('Error: Please, enter same or greater than 8 character long ' + label);
          setTimeout(() => setStatus(''),1000);
          setPassword('');
          return false;
        }
      }
    return true;
  }//validate

  function enableSubmitbutton(field){
    if (!field) {
      setStatus('Error: ');
      setTimeout(() => setStatus(''),1000);
      document.getElementById("submit").disabled = true;
      return false;
    }
    document.getElementById("submit").disabled = false;
    return true;
  }//enableSubmitbutton

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }//handleCreate    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }//clearForm

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} data-toggle="tooltip" data-placement="top" title="Given and Family Name in order, please." onChange={e => {setName(e.currentTarget.value); enableSubmitbutton(e.currentTarget.value)}} /><br/>
              Email address<br/>

              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} data-toggle="tooltip" data-placement="top" title="Qualified email address, please." onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>

              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} data-toggle="tooltip" data-placement="top" title="More than or equal to 8 characters long only." onChange={e => setPassword(e.currentTarget.value)}/><br/>

              <button id="submit" type="submit" disabled className="btn btn-light" data-toggle="tooltip" data-placement="top" title="Before submitting, check again your information, please." onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>New Bank Account has been Successfully Created!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}