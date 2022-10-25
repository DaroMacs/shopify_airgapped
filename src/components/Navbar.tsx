import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";

export const stylingObject = {
  title: {
    background: "linear-gradient(45deg, #eb5d47, #87638a, #a4f9ff)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  }
};

const Navbar = () => {
  return (
    <div
      className="navbar shadow-lg justify-between "
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <div>
        <Logo />
        <h1
          className="btn btn-ghost normal-case text-xl pl-0"
          style={stylingObject.title}
        >
          AirGapped Evenths
        </h1>
      </div>

      <ConnectButton />
    </div>
  );
};

export default Navbar;
