import { HomeIcon } from "@heroicons/react/16/solid";
import { ChartBarIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const BottomBar = () => {
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
    {
      icon: <SettingsIcon className="h-6" />,
      active: false,
    },
  ];
  return (
    <div className="md:hidden flex-col h-[4.5rem] flex bottom-0 fixed w-screen justify-center px-4 bg-[#877979] text-white">
      <div className="flex w-full justify-around">
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
    </div>
  );
};

export default BottomBar;
