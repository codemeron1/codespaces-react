function sayHello(){
  alert("Hello");
}

function Login(){  
  return(
    <div className="login-container">
        <img src="./Assets/images/planet-earth.png" alt="Logo" className=""/>
        <span className="d-block">COMPANY NAME</span>
        <input className="form-control" id="txtUsername" placeholder="Username" />
        <input className="form-control mt-2" id="txtPassword" placeholder="Password"/>
        <button onClick={sayHello()} className="btn btn-success d-block mt-2">LOGIN</button>
        <button className="btn btn-primary d-block mt-2">Login with Google</button>
    </div>
  );
}

export default Login;