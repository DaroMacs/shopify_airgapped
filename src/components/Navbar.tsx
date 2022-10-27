import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export const stylingObject = {
  title: {
    background: "linear-gradient(45deg, #eb5d47, #87638a, #a4f9ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
};

const Navbar = () => {
  return (
    <div
      className="navbar shadow-lg justify-between fixed"
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <div>
        <Logo />
        <Link to={"/"}>
          <h1
            className="btn btn-ghost normal-case text-xl pl-0"
            style={stylingObject.title}
          >
            AirGapped Evenths
          </h1>
        </Link>
      </div>

      <ConnectButton />
    </div>
  );
};

export default Navbar;
