import React from "react";
import "./style/Hero.css";
// import Button from "./Micro_Compo/Button.jsx";
import { Link } from "react-router-dom";
import Button from "../../../Micro_Compo/Button.jsx";


const Hero = (props) => {
  
  return (
    <>
      <div className="hero">
        <div className="Headings">
          <h1>Current Lecture {props.Subject}</h1>
          <h2>Room {props.Hall}</h2>
          <h2>Professor {props.Professor}</h2>
          <Link to="/DashBoard">
            <Button Name="Go to Dashboard" />
          </Link>
        </div>

        <div className="image">
          <img src=".\src\assets\Home_Hero_Img.jpg" alt="Hero Illustration" />
        </div>
      </div>
    </>
  );
};

export default Hero;
