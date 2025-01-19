import prisma from "@/lib/prisma";

import Map from "@/app/ui/pet-carriers/map";
// import MonitoringCards from "@/app/(components)/monitor/pet-carrier-cards";

const MonitoringData = async () => {
  const monitoringData = await prisma.monitoring.findMany();

  return (
    <>
      {monitoringData.map((monitor) => (
        <div key={monitor.monitoringId}>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 justify-between pb-1 md:pb-0 text-sm md:text-base lg:text-lg 2xl:text-xl">
            <p className="font-medium">
              <span>{monitor.carrierName}</span> -
              <span
                className={
                  monitor.rangeStatus ? "text-green-600" : "text-red-600"
                }
              >
                {monitor.rangeStatus ? "In Range" : "Out of Range"}
              </span>
            </p>
            <div className="flex space-x-4 text-xs lg:text-sm 2xl:text-base">
              <p>
                <span className="font-medium">Latitude</span>:{monitor.latitude}
              </p>
              <p>
                <span className="font-medium">Longitude</span>:
                {monitor.longitude}
              </p>
            </div>
          </div>
          {/* <Map latitude={monitor.latitude} longitude={monitor.longitude} /> */}
          <Map />
          {/* <MonitoringCards
          carrierName={monitor.carrierName}
          timer={monitor.timer}
          /> */}
        </div>
      ))}
    </>
  );
};

export default MonitoringData;
