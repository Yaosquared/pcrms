"use client";

import { FaCheck } from "react-icons/fa";
import { toast } from "react-hot-toast";

import { markAsResolved } from "../actions";

const ResolveButton = ({ id }: { id: string }) => {
  const submitId = markAsResolved.bind(null, id);
  const clientAction = async () => {
    const result = await submitId();
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Complaint record marked as resolved");
    }
  };

  return (
    <form action={clientAction}>
      <button type="submit">
        <FaCheck
          title="Mark as resolved"
          size={20}
          className="text-green-600 hover:text-green-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 transition duration-300 ease-in-out"
        />
      </button>
    </form>
  );
};

export default ResolveButton;
