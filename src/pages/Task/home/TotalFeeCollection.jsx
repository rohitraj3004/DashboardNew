// eslint-disable-next-line no-unused-vars
import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  return (
    <div className="w-full flex items-center justify-center border rounded h-full bg-white ">
      <div className="p-4">
        <h1
          className={`w-full flex items-center justify-start text-black font-bold `}
        >
          Customers
        </h1>
        <h4 className="w-full flex items-center text-gray-300 justify-start ">
          Customers that buy product
        </h4>
        <div className="flex justify-between items-center px-5">
          <Chart
            options={{
              title: {
                text: "Dashboard Statistics",
                align: "left",
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize: "14px",
                  fontWeight: "bold",
                  fontFamily: undefined,
                  color: "white",
                },
              },

              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 240,
                    },
                    legend: {
                      position: "bottom",
                    },
                  },
                },
              ],
              colors: ["#155e75", "#1d4ed8", "#808080"],
              legend: {
                position: "bottom",
                horizontalAlign: "center",
                floating: false,
                fontSize: "14px",
              },
            }}
            series={[5, 15, 80]}
            type="donut"
            width="100%"
            height="320px"
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
