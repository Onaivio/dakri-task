"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Completed", "Work In Progress", "Due"],
  datasets: [
    {
      label: "Status",
      data: [7, 3, 2],
      backgroundColor: [
        "rgb(0, 140, 0, 0.8)", // Completed
        "rgb(223, 123, 0, 0.8)", // Work In Progress
        "rgba(255, 0, 3, 0.8)", // Due
      ],
      borderColor: [
        "rgb(0, 140, 0)", // Completed
        "rgb(223, 123, 0)", // Work In Progress
        "rgba(255, 0, 3)", // Due
      ],
      borderWidth: 0.5,
    },
  ],
};

const WorkOrderStatus = () => {
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "60%",
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
            Work Order Status
          </h1>
        </div>
      </div>
      <div className="flex lg:flex-row gap-3 lg:py-[1.48rem] lg:px-[1.5rem] py-[.5rem] px-[.8rem]">
        <div className="w-[10rem]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex justify-between w-full gap-3 py-1 border-b">
            <div className="flex items-center text-xs font-medium">
              <div className={`p-px border rounded-full mr-2 bg-green-700`}>
                <div className="w-2 h-2 rounded-full"></div>
              </div>
              Completed
            </div>
            <div className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
              7
            </div>
          </div>
          <div className="flex justify-between w-full gap-3 py-1 border-b">
            <div className="flex items-center text-xs font-medium">
              <div className={`p-px border rounded-full mr-2 bg-orange-500`}>
                <div className="w-2 h-2 rounded-full"></div>
              </div>
              Work In Progress
            </div>
            <div className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
              3
            </div>
          </div>
          <div className="flex justify-between w-full gap-3 py-1 border-b">
            <div className="flex items-center text-xs font-medium">
              <div className={`p-px border rounded-full mr-2 bg-red-500`}>
                <div className="w-2 h-2 rounded-full"></div>
              </div>
              Due
            </div>
            <div className="px-1 py-1 whitespace-nowrap text-sm text-gray-500">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderStatus;
