import React from "react";
import Card from "./Card";
import org from "../shared/images/organisation.webp";
import individual from "../shared/images/individual.webp";
import { motion } from "framer-motion";

const textCard = {
  org: "Click on the button if you are an organization that wants to add an Eventh.",
  att: "If you are an attendee that wants to see the list of your NFTs' Evenths. Click on the button",
  btnTextOrg: "I'm an Organizer",
  btnTextAtt: "I'm an Attendee",
  organizer: "organizer",
  attendee: "attendee"
};

const Users = () => {
  return (
    <div className="flex  h-screen max-h-screen">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="flex  gap-10 m-auto"
      >
        <Card
          type={"Attendee!"}
          text={textCard.att}
          textBtn={textCard.btnTextAtt}
          src={individual}
          link={textCard.attendee}
        />
        <Card
          type={"Organizer!"}
          text={textCard.org}
          textBtn={textCard.btnTextOrg}
          src={org}
          link={textCard.organizer}
        />
      </motion.div>
    </div>
  );
};

export default Users;
