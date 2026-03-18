import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";
const Login = () => {
  
  return (
    <>
    
      <div className="main">
  <div className="container">

    <div className="left_side">
      <div className="Headings">
        <h1>Login</h1>
        <p>Enter your account details</p>
      </div>

      <div className="Inputs">
        <form>
          <input type="text" placeholder="UserName" required />
          <input type="password" placeholder="UserPassword" required />
          <Link to="/Home">
          <button type="submit" to>Login</button>
          </Link>
        </form>
      </div>
    </div>

    <div className="Right_side">
      <div className="Heading">
        <h1>Welcome to <br/> Student Portal</h1>
        <p>Login to access your account</p>

        <div className="image">
          <img src=".\src\assets\Login_hero.webp"/>
          
        </div>

      </div>
    </div>

  </div>
</div>
    </>
  );
};

export default Login;
