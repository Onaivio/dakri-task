"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartOptions } from "chart.js";
import { ChartPieIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid";

ChartJS.register(ArcElement, Tooltip, Legend);

const spare_part = {
  labels: ["", ""],
  datasets: [
    {
      label: "",
      data: [5, 5],
      backgroundColor: [
        "rgb(223, 123, 0, 0.8)", // Completed
        "rgb(223, 123, 0, 0.2)",
      ],
      borderColor: [
        "rgb(223, 123, 0)", // Completed
        "rgb(223, 123, 0, 0.2)",
      ],
      borderWidth: 0.3,
    },
  ],
};
const rental_data = {
  labels: ["", ""],
  datasets: [
    {
      label: "",
      data: [7.5, 3.5],
      backgroundColor: [
        "rgb(0, 140, 0, 0.8)", // Completed
        "rgb(0, 140, 0, 0.2)", // Completed
      ],
      borderColor: [
        "rgb(0, 140, 0)", // Completed
        "rgb(0, 140, 0, 0.2)", // Completed
      ],
      borderWidth: 0.3,
    },
  ],
};

const ToolsEquipment = () => {
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "80%",
  };
  //   const textCenter = {
  //     id: "textCenter",
  //     beforeDatasetDraw(chart, args, pluginsOPtion) {
  //         const { ctx, date } = chart;
  //         ctx.save();
  //         ctx.font = "bolder 30px san-serif";
  //         ctx.fillStyle = "black";
  //         ctx.textAlign = "center";
  //         ctx.textBaseline = "middle";
  //         ctx.fillText("text", chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
  //         ctx.restore();
  //     }
  //   }

  return (
    <div className="flex flex-col border border-[#414141] rounded-3xl p-5 w-full shadow-lg">
      <div className="flex">
        <div>
          <h1 className="md:text-3xl text-xl text-[#414141] pl-2 font-bold">
            Tools and Equipments Availability
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2 md:px-4 py-3 mb-1">
        <div className="flex w-full justify-between px-6 items-center py-2">
          <div className="text-[#414141]">
            <WrenchScrewdriverIcon className="md:h-12 h-8" />
          </div>
          <div className="text-gray-500 text-md ">Rental Items</div>
          <div className="w-[4rem] h-[4rem]">
            <Doughnut data={spare_part} options={options} />
          </div>
        </div>
        <div className="flex w-full justify-between px-6 items-center py-2">
          <div className="text-[#414141]">
            <ChartPieIcon className="md:h-12 h-8" />
          </div>
          <div className="text-gray-500 text-md ">Spare Part</div>
          <div className="w-[4rem] h-[4rem]">
            <Doughnut data={rental_data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsEquipment;
