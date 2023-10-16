import { useState } from "react";
import Chart from "react-apexcharts";

export default function FeeCollectionChart() {
  const [changeBar, setChangeBar] = useState("bar");

  const ser = [
    {
      name: "Total Customers",
      data: [30, 40, 45, 50, 49, 89, 67, 98, 34, 10, 45, 67],
    },
  ];

  const options = {
    chart: {
      type: changeBar,
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      // colors: ['transparent']
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    colors: [`blue`],
  };

  return (
    <div className="border rounded shadow-lg p-4">
      <div className="flex justify-between items-center px-5">
        <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
        <div className="flex items-center gap-5">
          <select
            onChange={(e) => setChangeBar(e.target.value)}
            className="border rounded px-0 py-0"
          >
            <option value="area">Area</option>
            <option value="bar">Bar</option>
          </select>
        </div>
      </div>

      <Chart
        options={options}
        series={ser}
        type={changeBar}
        width="100%"
        height={320}
      />
    </div>
  );
}
