import { HomeIcon } from "@heroicons/react/16/solid";
import { ChartBarIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  const Menu = [
    {
      icon: <HomeIcon className="h-6" />,
      active: true,
    },
    {
      icon: <WrenchScrewdriverIcon className="h-6" />,
      active: false,
    },
    {
      icon: <ChartPieIcon className="h-6" />,
      active: false,
    },
    {
      icon: <ChartBarIcon className="h-6" />,
      active: false,
    },
  ];
  return (
    <div className="md:flex flex-col h-full hidden fixed w-[5.5rem] justify-between bg-[#877979] text-white">
      <div className="flex items-center justify-center p-4">
        <Image src="/dakri-logo.jpeg" alt="Logo" width={60} height={60} />
      </div>
      <div className="flex flex-1 mt-28 flex-col items-center space-y-1">
        {Menu.map((menu, index) => (
          <div
            key={index}
            className={`flex items-center ${
              menu.active ? "bg-[#645a5a]" : "bg-transparent"
            } rounded-xl justify-center p-3 hover:bg-[#645a5ab0] transition-opacity cursor-pointer`}
          >
            {menu.icon}
          </div>
        ))}
      </div>
      {/* Settings */}
      <div className="flex items-center justify-center p-4 ">
        <div className="p-4 rounded-full bg-white text-black cursor-pointer">
        <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
