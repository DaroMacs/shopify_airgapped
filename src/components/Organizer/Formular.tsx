import React, { useState } from "react";
import img from "../../shared/images/holo.webp";
import { IEventsProps } from "./Organizer";
import { contractAddress } from "../../utils/abi/config";
import ShopifyEventsContract from "../../utils/abi/Shopify.json";
import { ethers } from "ethers";
import { wait } from "@testing-library/user-event/dist/utils";
import { InfinitySpin } from "react-loader-spinner";

const Formular = ({ events, setEvents }: IEventsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const values = {
      imgUrl,
      name,
      description,
      eventAddress,
      date,
    };

    setEvents([...events, values]);

    addDish();
    setName("");
    setDescription("");
    setEventAddress("");
    setDate("");
    setImgUrl("");
  };
  console.log(events);

  const addDish = async () => {
    if (window.ethereum) {
      setIsLoading(true);
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any,
      );
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        ShopifyEventsContract.abi,
        signer,
      );
      console.log(contract);

      const transaction = await contract.addEvent(
        name,
        eventAddress,
        description,
        imgUrl,
        date,
      );
      // await wait(transaction);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between mb-16">
      <div className="bg-gray-800 px-3 rounded-xl mb-5 font-medium text-cyan-100 text-lg">
        <p>Add an Event</p>
      </div>
      {isLoading ? (
        <InfinitySpin width="200" color="#4d97a9" />
      ) : (
        <form
          className=" p-4 rounded-xl shadow-2xl"
          style={{ background: `url(${img}) no-repeat` }}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Event name"
              required
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="eventAddress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Address
            </label>
            <input
              type="address"
              id="eventAddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="0x...XYZ"
              value={eventAddress}
              onChange={(e: any) => setEventAddress(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Coolest eventh ever!"
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="imgUrl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imgUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="https://www.google.com/imgres?imgurl=%3A%2F"
              value={imgUrl}
              onChange={(e: any) => setImgUrl(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={date}
              onChange={(e: any) => setDate(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Formular;
