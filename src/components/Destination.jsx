import React from "react";

import hun1 from "../assets/hun1.jpg";
import hun from "../assets/hun.jpg";
import hun2 from "../assets/hun2.jpg";
import hun3 from "../assets/hun3.jpg";
import hun4 from "../assets/hun4.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={hun1}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={hun} alt="/" />
        <img className="w-full h-full object-cover" src={hun2} alt="/" />
        <img className="w-full h-full object-cover" src={hun3} alt="/" />
        <img className="w-full h-full object-cover" src={hun4} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
