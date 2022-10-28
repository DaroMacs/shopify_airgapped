import React, { useState } from "react";
import img from "../../shared/images/holo.webp";
import { IEventsProps } from "./Organizer";
import { abiAddress } from "../../utils/abi/config";
import ShopifyEvents from "../../utils/abi/Shopify.json";
import { ethers } from "ethers";

const Formular = ({ events, setEvents }: IEventsProps) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addDish();
    const values = {
      name,
      address,
      description,
      date,
      imgUrl,
    };
    setEvents([...events, values]);

    setName("");
    setDescription("");
    setAddress("");
    setDate("");
    setImgUrl("");
  };

  const addDish = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any,
      );
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        abiAddress,
        ShopifyEvents.abi,
        signer,
      );
      console.log(contract);

      const transaction = await contract.addEvent(
        imgUrl,
        name,
        description,
        address,
        date,
      );
      transaction.wait();
    }
  };

  return (
    <div className="flex flex-col items-center justify-between pt-24 mb-16">
      <div className="bg-gray-800 px-3 rounded-xl mb-5 font-medium text-cyan-100 text-lg">
        <p>Add an Event</p>
      </div>

      <form
        className=" p-4 rounded-xl shadow-2xl"
        style={{ background: `url(${img}) no-repeat` }}
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="event"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="event"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Event name"
            required
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="0x...XYZ"
            value={address}
            onChange={(e: any) => setAddress(e.target.value)}
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
    </div>
  );
};

export default Formular;
