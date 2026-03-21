import React from "react";
import { Route,  Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Auth/Login.jsx";
import DashBoard from "../Pages/DashBoard/DashBoard.jsx";
import Project_Datails from "../Pages/Project Details/Project_Details.jsx";
import About_us from "../Pages/About_us/About_us.jsx";
import Register from "../Pages/Auth/Register.jsx";
import AddLecture from "../Pages/Home/Section/AddLecture.jsx";
// import ProfileEdit from "../Pages/ProfileEdit/ProfileEdit.jsx";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard/>} />
        <Route path="/Project-Details" element={<Project_Datails />} />
        <Route path="/About-us" element={<About_us/>} />
        <Route path="/add-lecture" element={<AddLecture />} />
        {/* <Route path="/Edit-Porfile" element={<ProfileEdit/>} /> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
