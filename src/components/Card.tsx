import React from "react";
import { stylingObject } from "./About";

interface ICard {
  src: string;
  type: string;
}

const Card = ({ src, type }: ICard) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-2 border-indigo-600">
      <figure className="bg-slate-400">
        <img src={src} alt="Shoes" />
      </figure>
      <div className="card-body text-slate-700">
        <h2 className="card-title">{type}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" style={stylingObject.btn}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
