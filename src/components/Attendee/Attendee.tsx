import React, { useState } from "react";
import TableEvents from "./TableEvents";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";

const Attendee = () => {
  const { address } = useAccount();
  const [nfts, setNfts] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    apiKey: "QDjqTD3DZFOCTxTFPIDsRpt047P_37HO",
    network: Network.MATIC_MAINNET
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
    <div className="flex  gap-3 justify-evenly">
      <TableEvents nfts={nfts} isLoading={isLoading} />
      <TableEvents nfts={nfts} isLoading={isLoading} />

      {/* <TableEvents nfts={nfts} /> */}
    </div>
  );
};

export default Attendee;
