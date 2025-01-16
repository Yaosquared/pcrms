import prisma from "@/lib/prisma";

import { Divider } from "@mui/joy";

import MonitorHeader from "@/app/(components)/monitor/header";

import CarrierStatus from "@/app/(components)/monitor/carrier-status";
import Map from "@/app/ui/pet-carriers/map";

const Monitor = async () => {
  const monitoringData = await prisma.monitoring.findMany();

  return (
    <article className="w-[100%] flex flex-col">
      <MonitorHeader />
      <div className="pt-2 pb-4">
        <Divider orientation="horizontal" />
      </div>
      <CarrierStatus />
      <Map />

      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-9 md:items-center space-y-2 md:space-y-0 mt-4">
        <h3 className="text-sm md:text-base lg:text-lg 2xl:text-xl font-medium">
          Pet Carrier Details
        </h3>
        <div className="flex space-x-2 md:space-x-3 text-xs md:text-sm lg:text-base">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-600 flex items-center justify-center"></div>
            <p>Connected</p>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-600 flex items-center justify-center"></div>
            <p>Not Connected</p>
          </div>
        </div>
      </div>
      {/*        */}
      <div className="overflow-x-auto flex flex-row space-x-4 mt-2">
        {monitoringData.map((monitor) => (
          <div
            key={monitor.monitoringId}
            className="relative border rounded-md shadow-md text-xs md:text-sm lg:text-base cursor-pointer"
          >
            <div
              className={`absolute top-0 right-0 w-1.5 h-1.5 m-1 rounded-full ${
                monitor.rangeStatus === true ? "bg-green-600" : "bg-red-600"
              }`}
            />
            <div className="flex flex-row items-center space-x-3 p-3.5">
              <p className="font-medium">{monitor.carrierName}</p>
              <p>{monitor.timer}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Monitor;
