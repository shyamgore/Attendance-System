import React, { useState } from "react";
import "./style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import loginHero from "../../assets/Login_hero.webp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!username.trim() || !password.trim()) {
    setMessage("Please fill in all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const contentType = response.headers.get("content-type");
    

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      

      if (data.message === "Login Successful") {
        localStorage.setItem("user", JSON.stringify(data));
        setMessage("");
        navigate("/Home");
      } else {
        setMessage("Unexpected response from server");
      }
    } else {
      const text = await response.text();
      
      if (text === "Login Successful") {
        setMessage("");
        navigate("/Home");
      } else {
        setMessage(text);
      }
    }
  } catch (error) {
    console.error("Login error:", error);
    setMessage("Server error. Backend may not be running.");
  }
};

  return (
    <div className="main">
      <div className="container">
        <div className="left_side">
          <div className="Headings">
            <h1>Login</h1>
            <p>Enter your account details</p>
          </div>

          <div className="Inputs">
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="UserPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Login</button>

              {message && <p className="login-message">{message}</p>}
            </form>

            <div className="register_box">
              <p className="register-link-text">
                Don’t have an account? <Link to="/Register">Register</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="Right_side">
          <div className="Heading">
            <h1>
              Welcome to <br /> Student Portal
            </h1>
            <p>Login to access your account</p>

            <div className="image">
              <img src={loginHero} alt="Login Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;