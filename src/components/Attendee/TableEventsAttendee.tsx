import React from "react";
import { shortenWalletAddress } from "../../utils/shortenWallet";
import { InfinitySpin } from "react-loader-spinner";

const TableEvents = ({
  nfts,
  isLoading,
  events,
}: {
  nfts: any;
  isLoading: boolean;
  events: any;
}) => {
  const eventsAddress = events.map((event: any) => event.eventAddress);
  const nftsAddress = nfts?.ownedNfts.map((nft: any) => nft?.contract.address);

  const intersection = eventsAddress?.filter((element: string) =>
    nftsAddress?.includes(element),
  );

  const invitedEvents = events.filter((event: any) =>
    intersection?.includes(event.eventAddress),
  );

  console.log(invitedEvents);

  return (
    <div className="flex flex-col items-center justify-between  mb-16">
      <div className="bg-gray-800 px-3 rounded-xl mb-5 font-medium text-cyan-100 text-lg">
        <p>Your NFTs Events</p>
      </div>
      {isLoading ? (
        <InfinitySpin width="200" color="#4d97a9" />
      ) : (
        <table className="table text-gray-800 w-full">
          <thead>
            <tr>
              <th></th>

              <th>Event</th>
              <th>Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {invitedEvents?.map((event: any) => (
              <tr key={event?.name} className="hover">
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
                <td className="uppercase">{event?.name}</td>
                <td>
                  <a
                    href={`https://polygonscan.com/address/${event?.eventAddress}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {shortenWalletAddress(event?.eventAddress)}
                  </a>
                </td>
                <td>{event?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableEvents;
