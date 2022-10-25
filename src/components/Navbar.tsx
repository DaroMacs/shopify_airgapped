import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div
      className="navbar shadow-lg border-b-2 justify-between "
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    >
      <a href="/" className="btn btn-ghost normal-case text-xl">
        daisyUI
      </a>
      <ConnectButton />
    </div>
  );
};

export default Navbar;
