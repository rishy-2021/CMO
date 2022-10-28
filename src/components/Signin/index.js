import React from "react";
import { IconContext } from "react-icons/lib";
import { FaBeer } from "react-icons/fa";

const index = () => {
  return (
    <IconContext.Provider value={{ color: "cyan", size: "50px" }}>
      <div>
        <FaBeer />
      </div>
    </IconContext.Provider>
  );
};

export default index;
