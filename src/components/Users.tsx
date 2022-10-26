import React from "react";
import Card from "./Card";
import org from "../shared/images/organisation.webp";
import individual from "../shared/images/individual.webp";

const Users = () => {
  return (
    <div className="flex  h-screen max-h-screen">
      <div className="flex  gap-10 m-auto">
        <Card type={"Organizer!"} src={org} />
        <Card type={"Individual!"} src={individual} />
      </div>
    </div>
  );
};

export default Users;
