import React from "react";
import "./Nav.css";
import Button from "../../Micro_Compo/Button.jsx";
import { Link } from "react-router-dom";

const Nav = (Prop) => {

 
  return (
    <>
      <div className="Nav">
        <div className="Logo">
          <img src=".\src\assets\1Logo.png" alt="" />
        </div>
        <div className="Nav-btn">
          <Link to="/Home">
            <Button Name="Home" />
          </Link>
          <Link to="/Project-Details">
            <Button Name="Poject Details" />
          </Link>
          <Link to="/About us">
            <Button Name="About us" />
          </Link>
          <Link to="/DashBoard">
            <Button Name="Dashbord" />
          </Link>
          <div className="Profile_pic">
            <img
              src={Prop.Profile_img}
              alt="profile-pic"
              className="h-15 w-15 rounded-full"
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Nav;
