import React from "react";
import org from "../shared/images/what-airgapped.webp";

export const stylingObject = {
  title: {
    background: "linear-gradient(45deg,#3caab2,#e28f82,  #87638a )",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  },
  btn: {
    background: "linear-gradient(45deg, #eb5d47, #87638a, #a4f9ff)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  }
};

const About = () => {
  return (
    <div className="hero bg-fuchsia-50 max-w-fit rounded-xl border-0 border-gray-400 mt-5 mx-5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={org}
          className="max-w-lg rounded-lg shadow-2xl"
          alt="organi"
        />
        <div>
          <h1 className="text-5xl font-bold" style={stylingObject.title}>
            AirGapped Evenths
          </h1>
          <p className="py-6 text-gray-500">
            We are a dApp that allow Organizers to create events on blockchain
            and people to attend those events in case their got the NFTs for a
            specific event. All this without revealing your NFTs.
          </p>
          <button className="btn btn-primary" style={stylingObject.btn}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;