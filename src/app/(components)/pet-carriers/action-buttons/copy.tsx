"use client";

import { IoIosCopy } from "react-icons/io";

const CopyButton = () => {
  return (
    <IoIosCopy
      title="Copy Unique ID"
      size={20}
      onClick={() => console.log("Copy button clicked")}
      className="text-green-600 hover:text-green-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
    />
  );
};

export default CopyButton;
