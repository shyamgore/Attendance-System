import React from "react";
import Hero from "./Dash_Section/Hero.jsx";
import Profile_Photo from "../../assets/Profile_Photo.jpg";
import "./DashBoard.css";
import CalendarApp from "./Dash_Section/CalendarApp";

const DashBoard = () => {
  return (
    <>
      <div className="Contanier">
        <Hero
          Profile_Photo={Profile_Photo}
          total="10"
          Name="Shyam"
          Attended="2"
          Roll="2406045"
          Professor="Aahire mam"
          Subject="Java"
        />
      </div>
      <div className="p-7">
        <CalendarApp Location="1" UserName="Shyam" />
      </div>
    </>
  );
};
export default DashBoard;
