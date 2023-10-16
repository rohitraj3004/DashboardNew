/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import "./Aadrika/aadrika.css";
import CountCard from "./CountCard";
import FeeCollectionChart from "./FeeCollectionChart";
import TotalFeeCollection from "./TotalFeeCollection";

// import {PiStudent} from "react-icons/pi";
//https://github.com/fajarnurwahid/adminhub/blob/master/index.html

export default function HomePage() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="bg-azure">
      <div className="px-8 py-4">
        <div className="flex justify-between m-4">
          <div className="font-bold">Hello Shahrukh 👋</div>
          <div>
            <input type="search" placeholder="search" className="p-1" />
          </div>
        </div>
        <div>
          <CountCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 mt-8">
          <div className="col-span-3 bg-white">
            <FeeCollectionChart />
          </div>
          <div className="col-span-3">
            <TotalFeeCollection />
          </div>
        </div>
      </div>
    </div>
  );
}
