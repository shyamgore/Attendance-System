import React from "react";
import Hero from "./Section/Hero";
import Body from "./Section/Body";

const Home = () => {
  return (
    <>
      <div className="Section">
        <div className="h-screen">
          <Hero Professor="Aahire Mam" Subject="Java" Hall="SF-34" />
        </div>
        <div className="h-screen">
          <Body Table="Today's Lectures" />
        </div>
      </div>
    </>
  );
};

export default Home;
