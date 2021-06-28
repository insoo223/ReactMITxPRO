function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#" data-placement="top" title="To return to home page, click this link please.">Insoo Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="top" title="When you need a new bank account, click this link please.">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="top" title="To access your private information by log-in, click this link please.">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-placement="top" title="To save your cash or check to your deposit account, click this link please.">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-placement="top" title="To get cash from your deposit account, click this link please.">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" data-placement="top" title="To review your cash balance of your deposit account, click this link please.">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-placement="top" title="This is an administator's menu. If you want to list up all the registered clients' information, click this link please.">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}