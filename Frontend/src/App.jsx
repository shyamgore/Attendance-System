import React from "react";

import AppRoutes from "./Routes/AppRoutes";
import Nav from "./Web_Section/Nav_Bar/Nav.jsx";
import Footer from "./Web_Section/Footer/Footer.jsx";
import Profile_img from "./assets/Profile_Photo.jpg"

const App = () => {
  return (
    <>
      <Nav Profile_img={Profile_img}/>
      <AppRoutes/>
      <Footer/>
    </>
  );
};

export default App;
