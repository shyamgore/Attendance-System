import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerLogo">
            <h2>Student Portal</h2>
            <p>Smart attendance system for modern classrooms.</p>
          </div>

          <div className="footerLinks">
            <h3>Quick Links</h3>
            <Link to="/Home">
              <p>Home</p>
            </Link>
            <Link to="/DashBoard">
              <p>Dashboard</p>
            </Link>
            <p>About</p>
          </div>

          <div className="footerContact">
            <h3>Contact</h3>
            <p>Email: support@portal.com</p>
            <p>Phone: +91 00000 00000</p>
            <p>Location: College Campus</p>
          </div>
        </div>

        <div className="footerBottom">© 2026 Student Portal</div>
      </div>
    </>
  );
};

export default Footer;
