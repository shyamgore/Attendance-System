import React from "react";
import { Route,  Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import DashBoard from "../Pages/DashBoard/DashBoard.jsx";
import Project_Datails from "../Pages/Project Details/Project_Details.jsx";
import About_us from "../Pages/About_us/About_us.jsx";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard/>} />
        <Route path="/Project-Details" element={<Project_Datails />} />
        <Route path="/About us" element={<About_us/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
