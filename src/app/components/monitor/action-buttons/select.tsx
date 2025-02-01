"use client";

import { useState } from "react";

const SelectButton = ({
  carrierName,
  deviceStatus,
  rangeStatus,
}: {
  carrierName: string;
  deviceStatus: boolean | null;
  rangeStatus: boolean;
}) => {
  const [selectedCarrier, setSelectedCarrier] = useState("");

  const selectCarrier = async (carrierName: string) => {
    setSelectedCarrier(carrierName);
  };

  const getRangeStatus = (
    deviceStatus: boolean | null,
    rangeStatus: boolean
  ) => {
    if (deviceStatus == true && rangeStatus == true) {
      return (
        <p className="bg-green-600 p-2 text-xs text-white rounded-full whitespace-nowrap">
          In Range
        </p>
      );
    } else if (deviceStatus == true && rangeStatus == false) {
      return (
        <p className="bg-red-600 p-2 text-xs text-white rounded-full whitespace-nowrap">
          Out of Range
        </p>
      );
    } else {
      return (
        <p className="bg-gray-600 p-2 text-xs text-white rounded-full whitespace-nowrap">
          N/A
        </p>
      );
    }
  };

  return (
    <>
      <button
        type="submit"
        onClick={() => selectCarrier(carrierName)}
        className={`w-[10.5rem] h-[4rem] relative border rounded-md shadow-md text-xs md:text-sm lg:text-base cursor-pointer ${
          selectedCarrier === carrierName ? "bg-accent" : ""
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-1.5 h-1.5 m-1 rounded-full ${
            deviceStatus === true ? "bg-green-600" : "bg-red-600"
          }`}
        />
        <div className="flex flex-row items-center justify-center space-x-3 p-3.5">
          <p className="font-medium">{carrierName}</p>
          {getRangeStatus(deviceStatus, rangeStatus)}
        </div>
      </button>
    </>
  );
};

export default SelectButton;
