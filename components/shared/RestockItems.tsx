import { WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const tableData = [
  {
    id: "01",
    orderId: "6465",
    tool: "Screw",
    status: {
      text: "Low",
      color: "[rgb(223, 123, 0, 0.8)]",
    },
    time: "15:00",
  },
  {
    id: "02",
    orderId: "5665",
    tool: "Wire (electrical)",
    status: {
      text: "None",
      color: "[#f82715]",
    },
    time: "05:00",
  },
  {
    id: "03",
    orderId: "1755",
    tool: "Bolts",
    status: {
      text: "None",
      color: "[#f82715]",
    },
    time: "00:00",
  },
];
const RestockItems = () => {
  return (
    <div className="flex flex-wrap flex-col border border-[#414141] w-full rounded-3xl shadow-lg p-5">
      <div className="flex">
        <div>
          <h1 className="md:text-3xl text-xl text-[#414141] pl-2 font-bold">
            Restock Items
          </h1>
        </div>
      </div>
      <div className="flex w-full overflow-x-auto">
        <table className="min-w-full my-4 divide-y divide-gray-200 overflow-x-auto">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="md:px-3 px-6 py-2 text-left text-xs font-medium text-gray-400 capitalize tracking-wider"
              >
                Tool ref.
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-center text-xs font-medium text-gray-400 capitalize tracking-wider"
              >
                Tool/Equipment
              </th>
              <th
                scope="col"
                className="md:px-1 px-12 py-2 text-center text-xs font-medium text-gray-400 capitalize tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 md:px-3 py-2 whitespace-nowrap">
                  <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-md bg-gray-100 text-gray-800">
                    {row.orderId}
                  </span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center justify-center">
                    <div className="text-sm text-center font-medium text-gray-900">
                      {row.tool}
                    </div>
                  </div>
                </td>
                <td className="md:px-1 px-12 py-2 whitespace-nowrap text-sm text-gray-400">
                  <div className="flex items-center justify-center">
                    <div className={`p-px border rounded-full mr-2`}>
                      <div
                        className={`w-2 h-2 rounded-full bg-${row.status.color}`}
                      ></div>
                    </div>
                    {row.status.text}
                  </div>
                </td>

                <td className="md:px-1 px-6 py-2 whitespace-nowrap text-sm font-medium">
                  <a
                    href="#"
                    className="bg-blue-500 px-4 py-1.5 text-white hover:bg-indigo-500 rounded-md"
                  >
                    Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestockItems;
