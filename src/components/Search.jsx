import React from "react";
import { GrMapLocation, RiCustomerService2Fill } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";

GrMapLocation;

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>
            <i>DISCOVER NEPAL</i>
          </h2>
          <p className="py-4">
            <em>
              Home to the tallest mountain in the world, Nepal is a paradise for
              trekkers and adventure enthusiasts as it provides stunning
              activities that include rafting, skiing, skydiving, and bungee
              jumping. It is also famous as Lord Gautam Buddha, was born here.
              With the majority of the country covered in hills and mountains,
              Nepal also attracts tourists due to its cultural variation, as
              more than 60 ethnic groups live here. It is home to many
              significant Hindu and Buddhist pilgrimage sites such as Muktinath,
              Pashupatinath, Lumbini, and Boudhanath. The country provides you
              with a combination of nature and culture, which will soothe your
              heart and soul like never before. So evoke the explorer inside you
              and get ready to discover the majestic and enchanting Nepal.
            </em>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <GrMapLocation size={50} />
            </button>
            <div>
              <h3 className="py-2">Office Location</h3>
              <p className="py-1 px-20">
                Bhrikutimandap Kathmandu <br /> P.O. Box: 11018
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Contact US</h3>
              <p className="py-1 px-10">
                Tel: +977 1 4256909 <br />
                Fax: +977 1 4256910 <br />
                visitNepalinfor@org.np
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Kathmandu</option>
              <option>Pokhara </option>
              <option>Everest</option>
              <option>Janakpur</option>
              <option>Chitwan</option>
              <option>Lumbini</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Arrival</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Departure</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
