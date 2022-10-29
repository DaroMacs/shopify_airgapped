import React from "react";
import TableEvents from "./TableEventsOrganizer";
import { useAccount } from "wagmi";
import Formular from "./Formular";
import { IEvents } from "../../Router/RouterNav";
import { stylingObject } from "../About";

export interface IEventsProps {
  setEvents: React.Dispatch<React.SetStateAction<IEvents[]>>;
  events: IEvents[];
}

const Organizer = ({ events, setEvents }: IEventsProps) => {
  const { isConnected } = useAccount();

  return (
    <>
      <h1
        className=" flex pl-5 pt-12 pb-10 text-4xl align-middle justify-start font-bold"
        style={stylingObject.title}
      >
        Organizer
      </h1>
      {isConnected && (
        <div className="flex gap-3 justify-evenly items-start">
          <TableEvents events={events} setEvents={setEvents} />
          <Formular events={events} setEvents={setEvents} />
        </div>
      )}
    </>
  );
};

export default Organizer;
