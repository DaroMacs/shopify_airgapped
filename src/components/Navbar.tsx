import React from "react";

const Navbar = () => {
  return (
    <div
      className="navbar shadow-lg border-b-2"
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    >
      <a href="/" className="btn btn-ghost normal-case text-xl">
        daisyUI
      </a>
    </div>
  );
};

export default Navbar;
