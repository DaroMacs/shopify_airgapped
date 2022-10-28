import React, { useState } from "react";
import individual from "../../shared/images/individual.webp";
import { useEffect } from "react";
import { Contract } from "ethers";
import { shortenWalletAddress } from "../../utils/shortenWallet";
import { Link } from "react-router-dom";
import { IEventsProps } from "./Organizer";

interface IProps extends IEventsProps {
  nfts: any;
  isLoading: boolean;
}

const TableEvents = ({ isLoading, events, setEvents }: IProps) => {
  return (
    <div className="flex flex-col items-center justify-between pt-24 mb-16  ">
      <div className="bg-gray-800 px-3 rounded-xl mb-5 font-medium text-cyan-100 text-lg">
        <p>Your Events</p>
      </div>

      <table className="table text-gray-800 w-full ">
        <thead>
          <tr>
            <th></th>

            <th>Event</th>
            <th>Address</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="">
          <div />
          {events?.map((event: any) => (
            <tr className="hover ">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={event?.imgUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="uppercase">
                {event?.name !== undefined
                  ? event?.name
                  : event?.name.substring(0, 16)}
              </td>
              <td>
                <a
                  href={`https://polygonscan.com/address/${event?.address}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {shortenWalletAddress(event?.address)}
                </a>
              </td>
              <td>{event?.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableEvents;
