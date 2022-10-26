import React from "react";
import { Route, Routes } from "react-router-dom";
import Attendee from "../components/Attendee";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Organizer from "../components/Organizer";
import Users from "../components/Users";

const RouterNav = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/users" element={<Users />} />
        <Route path="/organizer" element={<Organizer />} />
        <Route path="/attendee" element={<Attendee />} />
      </Routes>
    </>
  );
};

export default RouterNav;
