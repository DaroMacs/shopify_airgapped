import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Users from "../components/Users";

const RouterNav = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default RouterNav;
