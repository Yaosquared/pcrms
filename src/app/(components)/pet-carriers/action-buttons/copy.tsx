"use client";

import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "react-hot-toast";

import { IoIosCopy } from "react-icons/io";

const CopyButton = ({ id }: { id: string }) => {
  const [, copy] = useCopyToClipboard();

  return (
    <IoIosCopy
      title="Copy Unique ID"
      size={20}
      onClick={() => {
        copy(id);
        toast.success("Pet carrier ID copied");
      }}
      className="text-green-600 hover:text-green-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
    />
  );
};

export default CopyButton;
