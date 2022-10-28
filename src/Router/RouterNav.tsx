import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Attendee from "../components/Attendee/Attendee";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Organizer from "../components/Organizer/Organizer";
import Users from "../components/Users";

export interface IEvents {
  name: string;
  address: string;
  description: string;
  date: string;
}

const RouterNav = () => {
  const [events, setEvents] = useState<IEvents[]>([] as IEvents[]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/organizer"
          element={<Organizer events={events} setEvents={setEvents} />}
        />
        <Route
          path="/attendee"
          element={<Attendee events={events} setEvents={setEvents} />}
        />
      </Routes>
    </>
  );
};

export default RouterNav;
