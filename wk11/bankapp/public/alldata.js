function AllData(){
  const ctx = React.useContext(UserContext);
  let name, email, password, balance, data;
  let allName;
  //ctx.users.slice(0);
  //name = ctx.users[0].name;
  allName = JSON.stringify(ctx.users[0].name);
  name = allName;
  email = ctx.users[0].email;
  password = ctx.users[0].password;
  balance = ctx.users[0].balance;
  //data = {email, balance};
  return (
    <Card
      txtcolor="black"
      header={"Name: "+name}
      title="Email, Password, Balance" 
      body = {email+", "+password+", "+balance} 
    />
  );
}
