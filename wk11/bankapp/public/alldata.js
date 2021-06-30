function AllData(){
  const ctx = React.useContext(UserContext);
  let name, email, password, balance, numEle, avar;
  let allName='', allEmail ='', allPassword = '', allBalance = ''; 
  numEle = JSON.stringify(ctx.users.length);
  for (let i=0; i<numEle; i++)
  {
    allName = allName + "," + JSON.stringify(ctx.users[i].name);
    allEmail = allEmail + "," + JSON.stringify(ctx.users[i].email);
    allPassword = allPassword + "," + JSON.stringify(ctx.users[i].password);
    allBalance = allBalance + "," + JSON.stringify(ctx.users[i].balance);
  }
  name = allName;
  email = allEmail;
  password = allPassword;
  balance = allBalance;
  
  return (
    <>
      <div class="container bg-warning ">
        <div class="row">
          <div class="col-sm">
            <h3>Name</h3><br/>
            {name.split(",")[1]}<br/>
            {name.split(",")[2]}<br/>
            {name.split(",")[3]}<br/>
          </div>
          <div class="col-sm">
            <h3>Email</h3><br/>
            {email.split(",")[1]}<br/>
            {email.split(",")[2]}<br/>
            {email.split(",")[3]}<br/>
          </div>
          <div class="col-sm">
            <h3>Password</h3><br/>
            {password.split(",")[1]}<br/>
            {password.split(",")[2]}<br/>
            {password.split(",")[3]}<br/>
          </div>
        </div>
      </div>    
    </>
  );
}
