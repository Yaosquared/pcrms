"use client";

import { toast } from "react-hot-toast";

import SelectButton from "./action-buttons/select";
import { editSelectedCarrier } from "./actions";

type MonitoringDataProps = {
  monitoringId: string;
  carrierId: string;
  carrierName: string;
  isCarrierSelected: boolean;
  deviceStatus: boolean | null;
  rangeStatus: boolean;
};

const CarrierControls = ({
  monitoringData,
}: {
  monitoringData: MonitoringDataProps[];
}) => {
  const clientAction = async (formData: FormData) => {
    const result = await editSelectedCarrier(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Pet carrier location displayed");
    }
  };

  return (
    <>
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
      <div className="overflow-x-auto flex flex-row space-x-4 mt-2 scrollbar-hide">
        {monitoringData.map((monitor) => (
          <div key={monitor.monitoringId}>
            <form action={clientAction}>
              <input
                type="hidden"
                name="monitor-id"
                value={monitor.monitoringId}
              />
              <SelectButton
                carrierName={monitor.carrierName}
                deviceStatus={monitor.deviceStatus}
                rangeStatus={monitor.rangeStatus}
              />
            </form>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarrierControls;
