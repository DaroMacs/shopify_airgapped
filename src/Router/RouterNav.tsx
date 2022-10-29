import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Attendee from "../components/Attendee/Attendee";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Organizer from "../components/Organizer/Organizer";
import Users from "../components/Users";
import { contractAddress } from "../utils/abi/config";
import ShopifyEventsContract from "../utils/abi/Shopify.json";

export interface IEvents {
  imgUrl: string;
  name: string;
  description: string;
  eventAddress: string;
  date: string;
}

const RouterNav = () => {
  const [events, setEvents] = useState<IEvents[]>([] as IEvents[]);

  const getAllEvents = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/L-cyCh_HT4fXQlLCJwQFBxuZQ26dKHbo",
    );
    const contract = new ethers.Contract(
      contractAddress,
      ShopifyEventsContract.abi,
      provider,
    );

    const eventsFromSmartContract = await contract.getAllEvents();

    setEvents(eventsFromSmartContract);
  };
  useEffect(() => {
    getAllEvents();
  }, []);

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
