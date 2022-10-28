import React from "react";

import Stats from "./Stats";
import About from "./About";

const Hero = () => {
  return (
    <div className="grid content-center pt-2">
      <About />
      <div className=" flex justify-evenly m-0 gap-3"></div>
      <Stats />
    </div>
  );
};

export default Hero;
