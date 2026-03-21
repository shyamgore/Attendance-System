import React, { useState } from "react";
import "./style/Register.css";
import { Link, useNavigate } from "react-router-dom";
import registerHero from "../../assets/Login_hero.webp";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !username.trim() ||
      !name.trim() ||
      !identifier.trim() ||
      !role.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setMessage("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          name,
          identifier,
          role,
          password,
        }),
      });

      const result = await response.text();

      if (result === "User registered successfully") {
        setMessage("Registration successful. Redirecting to login...");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage(result);
      }
    } catch (error) {
      setMessage("Server error. Backend may not be running.");
      console.error(error);
    }
  };

  return (
    <div className="register_main">
      <div className="register_container">
        <div className="register_left_side">
          <div className="register_Headings">
            <h1>Register</h1>
            <p>Create your portal account</p>
          </div>

          <div className="register_Inputs">
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder={role === "student" ? "Roll Number" : "Teacher ID"}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>

              <input
                type="password"
                placeholder="UserPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button type="submit">Register</button>

              {message && <p className="register-message">{message}</p>}
            </form>

            <div className="login_link">
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="register_Right_side">
          <div className="register_Heading">
            <h1>
              Join the <br /> Student Portal
            </h1>
            <p>Register to create your account</p>

            <div className="register_image">
              <img src={registerHero} alt="Register Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;