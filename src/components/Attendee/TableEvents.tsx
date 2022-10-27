import React, { useState } from "react";
import individual from "../../shared/images/individual.webp";
import { useEffect } from "react";

const TableEvents = ({
  nfts,
  isLoading
}: {
  nfts: any;
  isLoading: boolean;
}) => {
  console.log(nfts);

  console.log(nfts?.ownedNfts.map((nft: any) => console.log(nft)));

  return (
    <div className="flex flex-col items-center justify-between pt-24 mb-16">
      <div className="bg-gray-800 px-3 rounded-xl mb-5 font-medium text-cyan-100 text-lg">
        <p>Your NFTs</p>
      </div>

      <table className="table text-gray-800 w-full ">
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
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={individual} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Good dApp</td>
            <td>dApp</td>
            <td>100k</td>
            <td>1.0.0</td>
            <td>
              <button className="btn btn-outline btn-white">Edit/Update</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={individual} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Bad Game</td>
            <td>Game</td>
            <td>1080</td>
            <td>1.2.0</td>
            <td>
              <button className="btn btn-outline btn-white">Edit/Update</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={individual} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Good Game</td>
            <td>Game</td>
            <td>52,200</td>
            <td>2.4.6</td>
            <td>
              <button className="btn btn-outline btn-white">Edit/Update</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* {nfts?.ownedNfts.map((nft: any) => (
        <div
          className=" bg-rose-100 text-gray-500 rounded-xl p-4 mb-5 b-5 w-50 h-50"
          style={{
            maxHeight: "300px",
            maxWidth: "300px",
            minHeight: "300px",
            minWidth: "300px"
          }}
        >
          <div className="avatar ">
            <img
              src={nft.media[0].gateway}
              alt="Avatar Tailwind CSS Component"
              className=" h-5 w-5	"
            />
          </div>
          <div className="pl-4 text-sm font-semibold">
            <h3 className="uppercase">{nft.contract.name}</h3>
            <div className="badge badge-secondary py-2 mt-1">
              4.5{" "}
              <span className="pl-2 " style={{ fontSize: "10px" }}>
                ⭐
              </span>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default TableEvents;
