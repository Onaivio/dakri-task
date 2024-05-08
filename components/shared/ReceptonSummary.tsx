"use client";
import React from "react";
import {
  ChartPieIcon,
  InboxIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/16/solid";
import { Inbox } from "lucide-react";

const ReceptionSummary = () => {
  return (
    <div className="flex flex-col rounded-3xl p-5 w-full">
      <div className="flex">
        <div>
          <h1 className="md:text-3xl text-xl text-[#414141] pl-2 font-bold">
            Reception Summary
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2 md:px-4 pt-6 mb-1">
        <div className="flex w-full justify-between px-6 items-center py-2">
          <div className="text-[#414141]">
            <InboxIcon className="md:h-12 h-8" />
          </div>
          <div className="text-gray-700 text-md font-bold">
            Packages Received{" "}
          </div>
          <div className="text-gray-700 text-md font-bold">10</div>
        </div>
        <div className="flex w-full justify-between px-6 items-center py-2">
          <div className="text-[#414141]">
            <InboxIcon className="md:h-12 h-8" />
          </div>
          <div className="text-gray-700 text-md font-bold">
            Processed Packages
          </div>
          <div className="text-gray-700 text-md font-bold">5</div>
        </div>
      </div>
    </div>
  );
};

export default ReceptionSummary;
