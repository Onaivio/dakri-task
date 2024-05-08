import BottomBar from "@/components/shared/BottomBar";
import MissingItems from "@/components/shared/MissingItems";
import ReceptionSummary from "@/components/shared/ReceptonSummary";
import RentalTools from "@/components/shared/RentalTools";
import RestockItems from "@/components/shared/RestockItems";
import Sidebar from "@/components/shared/Sidebar";
import ToolsEquipment from "@/components/shared/ToolsEquipment";
import WorkOrderStatus from "@/components/shared/WorkOrderStatus";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex w-full">
        <Sidebar />
        <BottomBar />
        <div className="w-full md:ml-[5.3rem]">
          <div className="w-full mt-5 flex-col lg:flex-row flex lg:px-10 px-4 gap-7 py-3">
            <div className="lg:w-7/12 w-12/12">
              <RentalTools />
            </div>
            <div className="lg:w-5/12 w-full">
              <WorkOrderStatus />
            </div>
          </div>
          <div className="w-full flex-col lg:flex-row flex lg:px-10 px-4 gap-7 py-3">
            <div className="md:w-7/12 lg:w-5/12 w-full">
              <MissingItems />
            </div>
            <div className="lg:w-7/12 w-12/12">
              <ToolsEquipment />
            </div>
          </div>
          <div className="w-full flex-col lg:flex-row flex lg:px-10 px-4 gap-7 pt-3 md:pb-12 pb-24">
            <div className="lg:w-7/12 w-12/12">
              <RestockItems />
            </div>
            <div className="lg:w-5/12 w-full">
              <ReceptionSummary />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
