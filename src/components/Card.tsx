import { motion } from "framer-motion";
import React from "react";
import { stylingObject } from "./About";
import { Link } from "react-router-dom";

interface ICard {
  src: string;
  type: string;
  text: string;
  textBtn: string;
  link: string;
}

const Card = ({ src, type, text, textBtn, link }: ICard) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card w-96 bg-base-100 shadow-xl border-2 border-indigo-600"
    >
      <figure className="bg-slate-400">
        <img src={src} alt="Shoes" />
      </figure>
      <div className="card-body text-slate-700">
        <h2 className="card-title">{type}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <Link to={`/${link}`}>
            <button className="btn btn-primary" style={stylingObject.btn}>
              {textBtn}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
