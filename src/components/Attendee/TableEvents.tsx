import React from "react";
import { shortenWalletAddress } from "../../utils/shortenWallet";
import { InfinitySpin } from "react-loader-spinner";

const TableEvents = ({
  nfts,
  isLoading,
}: {
  nfts: any;
  isLoading: boolean;
}) => {
  console.log(nfts);

  console.log(
    nfts?.ownedNfts.map((nft: any) =>
      console.log(nft.media[0].gateway.includes(".mp4")),
    ),
  );

  return (
    <div className="flex flex-col items-center justify-between pt-24 mb-16">
      <div className="bg-gray-800 px-3 rounded-xl mb-5 font-medium text-cyan-100 text-lg">
        <p>Your NFTs</p>
      </div>
      {isLoading ? (
        <InfinitySpin width="200" color="#4d97a9" />
      ) : (
        <table className="table text-gray-800 w-full">
          <thead>
            <tr>
              <th></th>

              <th>Name</th>
              <th>Address</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            <div />
            {nfts?.ownedNfts.map((nft: any) => (
              <tr className="hover">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {nft?.media[0].gateway.includes(".mp4") ? (
                          <iframe
                            title="nftvid"
                            className="w-full aspect-video aspect-square"
                            src={nft?.media[0].gateway}
                          ></iframe>
                        ) : (
                          <img
                            src={nft?.media[0].gateway}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="uppercase">
                  {nft?.contract.name !== undefined
                    ? nft?.contract.name
                    : nft?.rawMetadata.name.substring(0, 16)}
                </td>
                <td>
                  <a
                    href={`https://polygonscan.com/address/${nft?.contract.address}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {shortenWalletAddress(nft?.contract.address)}
                  </a>
                </td>
                <td>{nft?.contract.tokenType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableEvents;
