import PercentageCard from "@/app/components/pet-carriers/percentage-card";
import { fetchRecords } from "./actions";

const MonitorCards = async ({
  search,
  page,
}: {
  search: string;
  page: string;
}) => {
  const monitorData = await fetchRecords(search, page);

  const getColorValue = (batteryPercentage: number) => {
    if (batteryPercentage == 0) {
      return "neutral";
    } else if (batteryPercentage > 0 && batteryPercentage < 21) {
      return "danger";
    } else if (batteryPercentage > 20 && batteryPercentage < 100) {
      return "primary";
    } else if (batteryPercentage == 100) {
      return "success";
    } else {
      return "neutral";
    }
  };

  const getPercentageSign = (batteryPercentage: number) => {
    if (isNaN(batteryPercentage) || batteryPercentage == 0) {
      return false;
    } else if (!isNaN(batteryPercentage) || batteryPercentage > 0) {
      return true;
    }
  };

  return (
    <div className="flex flex-col overflow-x-auto">
      <h3 className="pb-2 text-sm md:text-base lg:text-lg 2xl:text-xl font-medium">
        Battery Percentage
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:flex-row lg:space-x-4 lg:gap-0">
        {monitorData.map((monitor) => (
          <div
            key={monitor.carrierId}
            className="flex flex-col border rounded-md justify-center items-center py-4 shadow-md space-y-2 lg:px-2 lg:w-[25%] 2xl:px-4"
          >
            <PercentageCard
              value={monitor.batteryPercentage}
              colorValue={getColorValue(monitor.batteryPercentage)}
              showPercentageSign={getPercentageSign(monitor.batteryPercentage)}
            />
            <p className="text-sm 2xl:text-lg font-medium">
              {monitor.carrierName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitorCards;
