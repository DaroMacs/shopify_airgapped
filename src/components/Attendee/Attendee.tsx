import React, { useState } from "react";
import TableEvents from "./TableEventsAttendee";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import TableNFTS from "./TableNFTS";
import { IEventsProps } from "../Organizer/Organizer";
import { stylingObject } from "../About";

const Attendee = ({ events, setEvents }: IEventsProps) => {
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    apiKey: "QDjqTD3DZFOCTxTFPIDsRpt047P_37HO",
    network: Network.MATIC_MAINNET,
  };
  const alchemy = new Alchemy(config);

  // Fetch all the NFTs owned by elanhalpern.eth

  // Execute the code

  useEffect(() => {
    setIsLoading(true);
    const main = async () => {
      // Get all NFTs
      const response = await alchemy.nft.getNftsForOwner(`${address}`);
      // Print NFTs
      return response;
    };

    const runMain = async () => {
      try {
        const data = await main();
        console.log(data);
        setNfts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    runMain();
    // eslint-disable-next-line
  }, []);

  console.log(nfts);

  return (
    <>
      <h1
        className=" flex pl-5 pt-12 pb-10 text-4xl align-middle justify-start font-bold"
        style={stylingObject.title}
      >
        Attendee
      </h1>
      {isConnected && (
        <div className="flex gap-3 justify-evenly items-start">
          <TableNFTS nfts={nfts} isLoading={isLoading} />
          <TableEvents nfts={nfts} isLoading={isLoading} events={events} />
        </div>
      )}
    </>
  );
};

export default Attendee;
