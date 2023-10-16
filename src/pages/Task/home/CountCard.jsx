/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { FaPeopleArrows } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdViewModule } from "react-icons/md";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 xl:grid-cols-4">
      <Card
        title="Earning"
        value="$198k"
        icon={<FaPeopleArrows size={30} className="text-teal-500" />}
        color="text-teal-500"
        bgColor="bg-red-50"
        text="37%"
      />
      <Card
        title="Order"
        value="$2.4k"
        icon={<AiFillProject size={23} className="text-blue-500" />}
        color="text-blue-500"
        bgColor="bg-blue-50"
        text="2%"
      />

      <Card
        title="Balance"
        value="$2.4k"
        icon={<MdViewModule size={30} className="text-[#6b21a8]" />}
        color="text-[#6b21a8]"
        bgColor="bg-red-50"
        text="2% "
      />
      <Card
        title="Total Sales"
        value="$89k"
        icon={<MdViewModule size={30} className="text-fuchsia-500" />}
        color="text-fuchsia-500"
        bgColor="bg-red-50"
        text="2% "
      />
    </div>
  );
}

export const Card = ({ title, icon, value, color, bgColor, text }) => {
  return (
    <div
      className={`border shadow-xl hover:shadow-lg rounded px-3  mt-0 bg-white `}
    >
      <div className={`p-2 flex items-center mr-1`}>
        <div className={` p-5 ${color} text-white ${bgColor} rounded-[50%]`}>
          {icon}
        </div>
        <div className="flex flex-col text-left">
          <p className={`text-[2vh] font-semibold  text-gray-300`}>
            <span className="num-2" /> {title}
          </p>
          <h1 className="font-semibold text-left">
            <span className={`num-2 text-[3vh] flex justify-start `}>
              {value}
            </span>
          </h1>
          <p className={`text-[2vh] font-semibold flex  text-left`}>
            <span className={`num-2 ${color} mr-1`}> {text}</span> this month
          </p>
        </div>
      </div>
    </div>
  );
};
