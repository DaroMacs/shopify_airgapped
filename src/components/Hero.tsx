import React, { useState } from "react";
import { useAccount, useConnect, useContractRead, useDisconnect } from "wagmi";
import { useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import org from "../shared/images/organisation.webp";
import individual from "../shared/images/individual.webp";
import Card from "./Card";
import Stats from "./Stats";
import About from "./About";

const Hero = () => {
  const { address } = useAccount();
  const [nfts, setNfts] = useState([] as any);

  const config = {
    apiKey: "QDjqTD3DZFOCTxTFPIDsRpt047P_37HO",
    network: Network.MATIC_MAINNET
  };
  const alchemy = new Alchemy(config);

  // Fetch all the NFTs owned by elanhalpern.eth

  // Execute the code

  useEffect(() => {
    const main = async () => {
      // Get all NFTs
      const response = await alchemy.nft.getNftsForOwner(`${address}`);
      // Print NFTs
      return response;
      console.log(response);
    };

    const runMain = async () => {
      try {
        const data = await main();
        console.log(data);
        setNfts(data.ownedNfts);
        process.exit(0);
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
    };
    runMain();
  }, []);

  console.log(nfts);

  return (
    <div className="grid content-center ">
      <About />
      <div className=" flex justify-evenly m-0 gap-3"></div>
      <Stats />
    </div>
  );
};

export default Hero;
