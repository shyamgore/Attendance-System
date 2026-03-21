import React from "react";
import "./style/Hero.css";
import { Link } from "react-router-dom";
import Button from "../../../Micro_Compo/Button.jsx";
import homeHeroImg from "../../../assets/Home_Hero_Img.jpg";

const Hero = ({ Subject, Hall, Professor, role }) => {
  return (
    <div className="hero">
      <div className="Headings">

        <h1>Current Lecture: {Subject || "No Current Lecture"}</h1>
        <h2>Room: {Hall || "No Room Assigned"}</h2>
        <h2>Professor: {Professor || "No Professor"}</h2>

        <div className="hero-buttons">
          <Link to="/DashBoard">
            <Button Name="Go to Dashboard" />
          </Link>

          <div className="p-6"></div>
          {role === "teacher" && (
            <Link to="/add-lecture">
              <Button Name="Add Lecture" />
            </Link>
          )}
        </div>
      </div>

      <div className="image">
        <img src={homeHeroImg} alt="Hero Illustration" />
      </div>
    </div>
  );
};

export default Hero;