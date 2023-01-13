import React from "react";

import hun from "../assets/hun.jpg";
import hun2 from "../assets/hun2.jpg";
import hun3 from "../assets/hun3.jpg";
import hun4 from "../assets/hun4.jpg";
import hun5 from "../assets/hun5.jpeg";
import hun6 from "../assets/hun6.jpeg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={hun} text="Patan" />
      <SelectsCard bg={hun2} text="Swayambhu" />
      <SelectsCard bg={hun3} text="Kritipur" />
      <SelectsCard bg={hun4} text="Pokhara" />
      <SelectsCard bg={hun5} text="Mustang" />
      <SelectsCard bg={hun6} text="Everest" />
    </div>
  );
};

export default Selects;
